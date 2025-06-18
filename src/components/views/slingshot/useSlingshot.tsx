import { useEffect, useRef, useCallback } from "react";
import Matter from "matter-js";

// ======== SLINGSHOT CONFIGURATION ========
const ANCHOR_X_FACTOR = 0.2125; // anchor point position (170/800)
const ANCHOR_Y_FACTOR = 0.75; // anchor point position (450/600)
const ELASTIC_LENGTH = 0.01;
const ELASTIC_DAMPING = 0.01;
const ELASTIC_STIFFNESS = 0.05;

// ======== PROJECTILE CONFIGURATION ========
const ROCK_DENSITY = 0.004;
const ROCK_RADIUS = 20;
const ROCK_SIDES = 8; // octagon shape
const MAX_ROCK_SPEED = 45;
const LAUNCH_THRESHOLD_X = 20; // 190-170 = 20 pixels from anchor
const LAUNCH_THRESHOLD_Y = -20; // 430-450 = -20 pixels from anchor

// ======== PYRAMIDS CONFIGURATION ========
const PYRAMID_COLUMNS = 5; // same size for all pyramids
const PYRAMID_ROWS = 10;
const PYRAMID_X_FACTOR = 0.7; // center of platforms (same as PLATFORM_X_FACTOR)

// Równomierne rozłożenie piramid w pionie
const PYRAMID1_Y_FACTOR = 0.8; // bottom pyramid (moved up)
const PYRAMID2_Y_FACTOR = 0.45; // middle pyramid
const PYRAMID3_Y_FACTOR = 0.15; // top pyramid

const BLOCK_WIDTH = 25;
const BLOCK_HEIGHT = 40;

// ======== PLATFORMS CONFIGURATION ========
const GROUND_HEIGHT = 50;
const PLATFORM_WIDTH = 200;
const PLATFORM_HEIGHT = 20;
const PLATFORM_X_FACTOR = 0.7625; // moved more to center

// Platformy też równomiernie rozłożone
const LOWER_PLATFORM_Y_FACTOR = 0.65; // lower platform (moved up)
const UPPER_PLATFORM_Y_FACTOR = 0.35; // upper platform (moved down)

// ======== PHYSICS CONSTRAINTS CONFIGURATION ========
const MOUSE_CONSTRAINT_STIFFNESS = 0.2;

// ======== COLORS CONFIGURATION ========
const GROUND_FILL_COLOR = "#2c3e50";
const PLATFORM_FILL_COLOR = "#2c3e50";
const BLOCK_FILL_COLOR = "#87CEEB";
const BLOCK_STROKE_COLOR = "#2c3e50";
const ROCK_FILL_COLOR = "#87CEEB";
const ROCK_STROKE_COLOR = "#95a5a6";
const ELASTIC_STROKE_COLOR = "#95a5a6";

// ======== VISUAL STYLING CONFIGURATION ========
const STROKE_WIDTH = 2;
const ELASTIC_LINE_WIDTH = 4;

// ======== BLOCK COUNTER CONFIGURATION ========
const INITIAL_BLOCK_COUNT = 27; // 27 blocks total in 3 pyramids
const BONUS_BLOCKS_COUNT = 500;

export const useSlingshot = (
  sceneRef: React.RefObject<HTMLDivElement | null>
) => {
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(Matter.Runner.create());
  const blockCountRef = useRef(INITIAL_BLOCK_COUNT);
  const blocksSetRef = useRef(new Set<Matter.Body>());

  const updateBlockCounter = useCallback(() => {
    const existingCounter = document.getElementById("block-counter");
    if (existingCounter) {
      existingCounter.textContent = `Blocks: ${blockCountRef.current}`;
    }
  }, []);

  const createBlockCounterElement = useCallback((sceneElement: HTMLElement) => {
    const existingCounter = document.getElementById("block-counter");
    if (existingCounter) {
      existingCounter.remove();
    }

    const counter = document.createElement("div");
    counter.id = "block-counter";
    counter.style.cssText = `
      position: absolute;
      top: 15px;
      left: 15px;
      z-index: 10;
      background: rgba(40, 40, 40, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 5px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid #555;
    `;
    counter.textContent = `Blocks: ${blockCountRef.current}`;
    sceneElement.appendChild(counter);
  }, []);

  const createBonusBlocks = useCallback(
    (world: Matter.World, sceneWidth: number) => {
      const { Bodies, Composite } = Matter;

      for (let i = 0; i < BONUS_BLOCKS_COUNT; i++) {
        const x = Math.random() * sceneWidth;
        const y = -50 - i * 2; // Stack them above screen

        const bonusBlock = Bodies.rectangle(x, y, BLOCK_WIDTH, BLOCK_HEIGHT, {
          render: {
            fillStyle: BLOCK_FILL_COLOR,
            strokeStyle: BLOCK_STROKE_COLOR,
            lineWidth: STROKE_WIDTH,
          },
        });

        blocksSetRef.current.add(bonusBlock);
        Composite.add(world, bonusBlock);
      }

      blockCountRef.current += BONUS_BLOCKS_COUNT;
      updateBlockCounter();
    },
    [updateBlockCounter]
  );

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Body,
      Composite,
      Composites,
      Constraint,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const currentEngine = engineRef.current;
    const world = currentEngine.world;
    const sceneElement = sceneRef.current;

    if (!sceneElement) return;

    // Reset block count and set
    blockCountRef.current = INITIAL_BLOCK_COUNT;
    blocksSetRef.current.clear();

    // Create block counter UI element
    createBlockCounterElement(sceneElement);

    const render = Render.create({
      element: sceneElement,
      engine: currentEngine,
      options: {
        width: sceneElement.clientWidth,
        height: sceneElement.clientHeight,
        wireframes: false,
        background: "transparent",
        showVelocity: false,
        showAngleIndicator: false,
        showCollisions: false,
      },
    });

    // Create anchor point for slingshot
    const anchor = {
      x: sceneElement.clientWidth * ANCHOR_X_FACTOR,
      y: sceneElement.clientHeight * ANCHOR_Y_FACTOR,
    };

    // Rock options
    const rockOptions = { density: ROCK_DENSITY };

    // Create initial rock (projectile)
    let rock = Bodies.polygon(anchor.x, anchor.y, ROCK_SIDES, ROCK_RADIUS, {
      ...rockOptions,
      render: {
        fillStyle: ROCK_FILL_COLOR,
        strokeStyle: ROCK_STROKE_COLOR,
        lineWidth: STROKE_WIDTH,
      },
    });

    // Create elastic constraint (slingshot band)
    const elastic = Constraint.create({
      pointA: anchor,
      bodyB: rock,
      length: ELASTIC_LENGTH,
      damping: ELASTIC_DAMPING,
      stiffness: ELASTIC_STIFFNESS,
      render: {
        strokeStyle: ELASTIC_STROKE_COLOR,
        lineWidth: ELASTIC_LINE_WIDTH,
      },
    });

    // Create ground
    const ground = Bodies.rectangle(
      sceneElement.clientWidth * 0.5,
      sceneElement.clientHeight,
      sceneElement.clientWidth + 15,
      GROUND_HEIGHT,
      {
        isStatic: true,
        render: { fillStyle: GROUND_FILL_COLOR },
      }
    );

    // Helper function to create pyramid and track blocks
    const createTrackedPyramid = (x: number, y: number) => {
      return Composites.pyramid(
        x,
        y,
        PYRAMID_COLUMNS,
        PYRAMID_ROWS,
        0,
        0,
        function (blockX: number, blockY: number) {
          const block = Bodies.rectangle(
            blockX,
            blockY,
            BLOCK_WIDTH,
            BLOCK_HEIGHT,
            {
              render: {
                fillStyle: BLOCK_FILL_COLOR,
                strokeStyle: BLOCK_STROKE_COLOR,
                lineWidth: STROKE_WIDTH,
              },
            }
          );
          blocksSetRef.current.add(block);
          return block;
        }
      );
    };

    // Create bottom pyramid (on ground)
    const pyramid1 = createTrackedPyramid(
      sceneElement.clientWidth * PYRAMID_X_FACTOR,
      sceneElement.clientHeight * PYRAMID1_Y_FACTOR
    );

    // Create lower platform (for middle pyramid)
    const lowerPlatform = Bodies.rectangle(
      sceneElement.clientWidth * PLATFORM_X_FACTOR,
      sceneElement.clientHeight * LOWER_PLATFORM_Y_FACTOR,
      PLATFORM_WIDTH,
      PLATFORM_HEIGHT,
      {
        isStatic: true,
        render: { fillStyle: PLATFORM_FILL_COLOR },
      }
    );

    // Create middle pyramid (on lower platform)
    const pyramid2 = createTrackedPyramid(
      sceneElement.clientWidth * PYRAMID_X_FACTOR,
      sceneElement.clientHeight * PYRAMID2_Y_FACTOR
    );

    // Create upper platform (for top pyramid)
    const upperPlatform = Bodies.rectangle(
      sceneElement.clientWidth * PLATFORM_X_FACTOR,
      sceneElement.clientHeight * UPPER_PLATFORM_Y_FACTOR,
      PLATFORM_WIDTH,
      PLATFORM_HEIGHT,
      {
        isStatic: true,
        render: { fillStyle: PLATFORM_FILL_COLOR },
      }
    );

    // Create top pyramid (on upper platform)
    const pyramid3 = createTrackedPyramid(
      sceneElement.clientWidth * PYRAMID_X_FACTOR,
      sceneElement.clientHeight * PYRAMID3_Y_FACTOR
    );

    // Add all bodies to world
    Composite.add(world, [
      ground,
      pyramid1,
      lowerPlatform,
      pyramid2,
      upperPlatform,
      pyramid3,
      rock,
      elastic,
    ]);

    // Track blocks that go off screen
    Events.on(currentEngine, "afterUpdate", function () {
      // Handle rock replacement logic - EXACTLY like original
      if (
        mouseConstraint.mouse.button === -1 &&
        (rock.position.x > anchor.x + LAUNCH_THRESHOLD_X ||
          rock.position.y < anchor.y + LAUNCH_THRESHOLD_Y)
      ) {
        // Limit maximum speed of current rock
        if (Body.getSpeed(rock) > MAX_ROCK_SPEED) {
          Body.setSpeed(rock, MAX_ROCK_SPEED);
        }

        // Release current rock and add a new one
        rock = Bodies.polygon(
          anchor.x,
          anchor.y,
          7, // slightly different sides for variety
          ROCK_RADIUS,
          {
            ...rockOptions,
            render: {
              fillStyle: ROCK_FILL_COLOR,
              strokeStyle: ROCK_STROKE_COLOR,
              lineWidth: STROKE_WIDTH,
            },
          }
        );
        Composite.add(world, rock);
        elastic.bodyB = rock;
      }

      // Check for blocks that have gone off screen or no longer exist in world
      const blocksToRemove: Matter.Body[] = [];
      const currentWorldBodies = new Set(Composite.allBodies(world));

      blocksSetRef.current.forEach((block) => {
        // Remove if block no longer exists in world OR has gone off screen
        if (
          !currentWorldBodies.has(block) ||
          block.position.x > sceneElement.clientWidth + 100 ||
          block.position.y > sceneElement.clientHeight + 100
        ) {
          blocksToRemove.push(block);
        }
      });

      // Remove off-screen blocks and update counter
      if (blocksToRemove.length > 0) {
        blocksToRemove.forEach((block) => {
          blocksSetRef.current.delete(block);
          // Only remove from world if it still exists there
          if (currentWorldBodies.has(block)) {
            Composite.remove(world, block);
          }
        });

        blockCountRef.current -= blocksToRemove.length;
        updateBlockCounter();

        // Check if all blocks are gone and trigger bonus blocks
        if (blockCountRef.current <= 0) {
          createBonusBlocks(world, sceneElement.clientWidth);
        }
      }
    });

    // Mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(currentEngine, {
      mouse: mouse,
      constraint: {
        stiffness: MOUSE_CONSTRAINT_STIFFNESS,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // Start rendering and physics
    Render.run(render);
    const runner = runnerRef.current;
    Runner.run(runner, currentEngine);

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: sceneElement.clientWidth, y: sceneElement.clientHeight },
    });

    // Cleanup function
    return () => {
      Runner.stop(runner);
      Render.stop(render);
      Composite.clear(world, false);
      Engine.clear(currentEngine);
      render.canvas.remove();
      render.textures = {};

      // Clean up counter element
      const counter = document.getElementById("block-counter");
      if (counter) {
        counter.remove();
      }
    };
  }, [
    sceneRef,
    createBlockCounterElement,
    updateBlockCounter,
    createBonusBlocks,
  ]);
};
