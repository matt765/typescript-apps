import { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";

// Configuration constants
const PHYSICS = {
  GRAVITY_STRENGTH: 1.2,
  SPINNER_ROTATION_SPEED: 0.3,
  SPINNER_UPDATE_INTERVAL_MS: 30,
  SPINNER_AIR_RESISTANCE: 0.005,
};

const BALLS = {
  MIN_RADIUS: 7.2,
  RADIUS_VARIATION: 7.2,
  WEIGHT_DENSITY: 0.01,
  AIR_RESISTANCE: 0.005,
  BOUNCE_FACTOR: 0.4,
  INITIAL_BALL_COUNT: 240,
  INITIAL_SPAWN_AREA_HEIGHT: 0.06, // top 6% of screen
};

const BLOWERS = {
  HORIZONTAL_FORCE_STRENGTH: 1,
  UPWARD_FORCE_STRENGTH: -0.05, // negative = upward
  EFFECT_AREA_FROM_BOTTOM: 0.6, // bottom 40% of screen
  EFFECT_AREA_FROM_SIDES: 0.25, // 25% from each side
  UPDATE_INTERVAL_MS: 50,
};

const VALVE = {
  BALLS_PER_SPAWN: 6,
  HORIZONTAL_SPREAD_PIXELS: 60,
  SPAWN_HEIGHT_FROM_TOP: 20,
  CONTINUOUS_SPAWN_INTERVAL_MS: 50,
};

const FUNNEL_BARS = {
  LEFT_BAR_X_POSITION: 0.23,
  RIGHT_BAR_X_POSITION: 0.77,
  BARS_Y_POSITION: 0.2,
  BAR_LENGTH_RATIO: 0.45, // relative to screen width
  BAR_THICKNESS: 20,
  BAR_ANGLE_RADIANS: 0.1,
};

const SPINNER_MILL = {
  CENTER_X_POSITION: 0.5,
  CENTER_Y_POSITION: 0.7,
  BLADE_LENGTH: 150,
  BLADE_WIDTH: 30,
};

export const useSpinner = (
  sceneRef: React.RefObject<HTMLDivElement | null>
) => {
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(Matter.Runner.create());
  const spinnerRef = useRef<Matter.Body | null>(null);
  const spinIntervalRef = useRef<number>(0);
  const leftBlowerIntervalRef = useRef<number>(0);
  const rightBlowerIntervalRef = useRef<number>(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isRightBlowing, setIsRightBlowing] = useState(false);
  const [isValveActive, setIsValveActive] = useState(false);
  const [isLeftBlowing, setIsLeftBlowing] = useState(false);
  const valveIntervalRef = useRef<number>(0);

  const startSpinning = useCallback(() => {
    setIsSpinning(true);
    if (spinnerRef.current) {
      spinIntervalRef.current = window.setInterval(() => {
        if (spinnerRef.current) {
          Matter.Body.setAngularVelocity(
            spinnerRef.current,
            PHYSICS.SPINNER_ROTATION_SPEED
          );
        }
      }, PHYSICS.SPINNER_UPDATE_INTERVAL_MS);
    }
  }, []);

  const stopSpinning = useCallback(() => {
    setIsSpinning(false);
    if (spinIntervalRef.current) {
      clearInterval(spinIntervalRef.current);
      spinIntervalRef.current = 0;
    }
  }, []);

  const startLeftBlowing = useCallback(() => {
    setIsLeftBlowing(true);
    if (engineRef.current) {
      leftBlowerIntervalRef.current = window.setInterval(() => {
        const world = engineRef.current.world;
        const allBodies = Matter.Composite.allBodies(world);
        const sceneElement = sceneRef.current;
        if (!sceneElement) return;

        const width = sceneElement.clientWidth;
        const height = sceneElement.clientHeight;

        // Left blower affects balls in smaller bottom-left area
        const ballsInRange = allBodies.filter(
          (body) =>
            !body.isStatic &&
            body.position.y > height * BLOWERS.EFFECT_AREA_FROM_BOTTOM &&
            body.position.x < width * BLOWERS.EFFECT_AREA_FROM_SIDES
        );

        ballsInRange.forEach((ball) => {
          const distance = Math.abs(ball.position.x - width * 0.1);
          const forceX =
            BLOWERS.HORIZONTAL_FORCE_STRENGTH / (distance * 0.001 + 1);
          const forceY = BLOWERS.UPWARD_FORCE_STRENGTH;
          Matter.Body.applyForce(ball, ball.position, { x: forceX, y: forceY });
        });
      }, BLOWERS.UPDATE_INTERVAL_MS);
    }
  }, []);

  const stopLeftBlowing = useCallback(() => {
    setIsLeftBlowing(false);
    if (leftBlowerIntervalRef.current) {
      clearInterval(leftBlowerIntervalRef.current);
      leftBlowerIntervalRef.current = 0;
    }
  }, []);

  const startRightBlowing = useCallback(() => {
    setIsRightBlowing(true);
    if (engineRef.current) {
      rightBlowerIntervalRef.current = window.setInterval(() => {
        const world = engineRef.current.world;
        const allBodies = Matter.Composite.allBodies(world);
        const sceneElement = sceneRef.current;
        if (!sceneElement) return;

        const width = sceneElement.clientWidth;
        const height = sceneElement.clientHeight;

        // Right blower affects balls in smaller bottom-right area
        const ballsInRange = allBodies.filter(
          (body) =>
            !body.isStatic &&
            body.position.y > height * BLOWERS.EFFECT_AREA_FROM_BOTTOM &&
            body.position.x > width * (1 - BLOWERS.EFFECT_AREA_FROM_SIDES)
        );

        ballsInRange.forEach((ball) => {
          const distance = Math.abs(ball.position.x - width * 0.9);
          const forceX =
            -BLOWERS.HORIZONTAL_FORCE_STRENGTH / (distance * 0.001 + 1);
          const forceY = BLOWERS.UPWARD_FORCE_STRENGTH;
          Matter.Body.applyForce(ball, ball.position, { x: forceX, y: forceY });
        });
      }, BLOWERS.UPDATE_INTERVAL_MS);
    }
  }, []);

  const stopRightBlowing = useCallback(() => {
    setIsRightBlowing(false);
    if (rightBlowerIntervalRef.current) {
      clearInterval(rightBlowerIntervalRef.current);
      rightBlowerIntervalRef.current = 0;
    }
  }, []);

  const startValve = useCallback(() => {
    setIsValveActive(true);
    if (engineRef.current) {
      // Spawn first batch immediately
      const world = engineRef.current.world;
      const width = sceneRef.current?.clientWidth || 0;

      for (let i = 0; i < VALVE.BALLS_PER_SPAWN; i++) {
        const newBall = Matter.Bodies.circle(
          width * 0.5 + (Math.random() - 0.5) * VALVE.HORIZONTAL_SPREAD_PIXELS,
          VALVE.SPAWN_HEIGHT_FROM_TOP,
          Math.random() * BALLS.RADIUS_VARIATION + BALLS.MIN_RADIUS,
          {
            density: BALLS.WEIGHT_DENSITY,
            frictionAir: BALLS.AIR_RESISTANCE,
            restitution: BALLS.BOUNCE_FACTOR,
            render: {
              fillStyle: "#87CEEB",
              strokeStyle: "#B0E0E6",
              lineWidth: 1,
            },
          }
        );
        Matter.Composite.add(world, newBall);
      }

      // Continue spawning while held
      valveIntervalRef.current = window.setInterval(() => {
        const world = engineRef.current.world;
        const width = sceneRef.current?.clientWidth || 0;

        for (let i = 0; i < VALVE.BALLS_PER_SPAWN; i++) {
          const newBall = Matter.Bodies.circle(
            width * 0.5 +
              (Math.random() - 0.5) * VALVE.HORIZONTAL_SPREAD_PIXELS,
            VALVE.SPAWN_HEIGHT_FROM_TOP,
            Math.random() * BALLS.RADIUS_VARIATION + BALLS.MIN_RADIUS,
            {
              density: BALLS.WEIGHT_DENSITY,
              frictionAir: BALLS.AIR_RESISTANCE,
              restitution: BALLS.BOUNCE_FACTOR,
              render: {
                fillStyle: "#87CEEB",
                strokeStyle: "#B0E0E6",
                lineWidth: 1,
              },
            }
          );
          Matter.Composite.add(world, newBall);
        }
      }, VALVE.CONTINUOUS_SPAWN_INTERVAL_MS);
    }
  }, []);

  const stopValve = useCallback(() => {
    setIsValveActive(false);
    if (valveIntervalRef.current) {
      clearInterval(valveIntervalRef.current);
      valveIntervalRef.current = 0;
    }
  }, []);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const currentEngine = engineRef.current;
    const world = currentEngine.world;

    // Increase gravity for faster falling balls
    world.gravity.y = PHYSICS.GRAVITY_STRENGTH;

    const sceneElement = sceneRef.current;

    if (!sceneElement) return;

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
      },
    });

    const width = sceneElement.clientWidth;
    const height = sceneElement.clientHeight;

    // Side funnel bars - FROM SIDES creating a shallow V shape (funnel from sides)
    // Left bar - starts from left edge, goes slightly down-right toward center
    const topBarLeft = Bodies.rectangle(
      width * FUNNEL_BARS.LEFT_BAR_X_POSITION,
      height * FUNNEL_BARS.BARS_Y_POSITION,
      width * FUNNEL_BARS.BAR_LENGTH_RATIO,
      FUNNEL_BARS.BAR_THICKNESS,
      {
        isStatic: true,
        angle: Math.PI * FUNNEL_BARS.BAR_ANGLE_RADIANS,
        render: {
          fillStyle: "#2c3e50",
          strokeStyle: "#34495e",
          lineWidth: 2,
        },
      }
    );

    // Right bar - starts from right edge, goes slightly down-left toward center
    const topBarRight = Bodies.rectangle(
      width * FUNNEL_BARS.RIGHT_BAR_X_POSITION,
      height * FUNNEL_BARS.BARS_Y_POSITION,
      width * FUNNEL_BARS.BAR_LENGTH_RATIO,
      FUNNEL_BARS.BAR_THICKNESS,
      {
        isStatic: true,
        angle: -Math.PI * FUNNEL_BARS.BAR_ANGLE_RADIANS,
        render: {
          fillStyle: "#2c3e50",
          strokeStyle: "#34495e",
          lineWidth: 2,
        },
      }
    );

    // Spinner mill (4 blades)
    const spinnerX = width * SPINNER_MILL.CENTER_X_POSITION;
    const spinnerY = height * SPINNER_MILL.CENTER_Y_POSITION;
    const bladeLength = SPINNER_MILL.BLADE_LENGTH;
    const bladeWidth = SPINNER_MILL.BLADE_WIDTH;

    const blade1 = Bodies.rectangle(
      spinnerX,
      spinnerY - bladeLength / 2,
      bladeWidth,
      bladeLength,
      {
        render: { fillStyle: "#87CEEB" },
      }
    );
    const blade2 = Bodies.rectangle(
      spinnerX + bladeLength / 2,
      spinnerY,
      bladeLength,
      bladeWidth,
      {
        render: { fillStyle: "#87CEEB" },
      }
    );
    const blade3 = Bodies.rectangle(
      spinnerX,
      spinnerY + bladeLength / 2,
      bladeWidth,
      bladeLength,
      {
        render: { fillStyle: "#87CEEB" },
      }
    );
    const blade4 = Bodies.rectangle(
      spinnerX - bladeLength / 2,
      spinnerY,
      bladeLength,
      bladeWidth,
      {
        render: { fillStyle: "#87CEEB" },
      }
    );

    // Create compound spinner body
    const spinner = Matter.Body.create({
      parts: [blade1, blade2, blade3, blade4],
      frictionAir: PHYSICS.SPINNER_AIR_RESISTANCE,
    });

    // Pin the spinner to rotate around center
    const pin = Bodies.circle(spinnerX, spinnerY, 5, {
      isStatic: true,
      render: { fillStyle: "#87CEEB" },
    });

    const constraint = Matter.Constraint.create({
      bodyA: pin,
      bodyB: spinner,
      length: 0,
      stiffness: 1,
    });

    spinnerRef.current = spinner;

    // Walls
    const walls = [
      Bodies.rectangle(width * 0.5, 0, width, 50, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(width * 0.5, height, width, 50, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(width, height * 0.5, 50, height, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(0, height * 0.5, 50, height, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
    ];

    // Initial balls - densely fill only the safe area above the funnel
    const initialBalls: Matter.Body[] = [];
    for (let i = 0; i < BALLS.INITIAL_BALL_COUNT; i++) {
      const ball = Bodies.circle(
        width * 0.05 + Math.random() * width * 0.9,
        Math.random() * height * BALLS.INITIAL_SPAWN_AREA_HEIGHT,
        Math.random() * BALLS.RADIUS_VARIATION + BALLS.MIN_RADIUS,
        {
          density: BALLS.WEIGHT_DENSITY,
          frictionAir: BALLS.AIR_RESISTANCE,
          restitution: BALLS.BOUNCE_FACTOR,
          render: {
            fillStyle: "#87CEEB",
            strokeStyle: "#B0E0E6",
            lineWidth: 1,
          },
        }
      );
      initialBalls.push(ball);
    }

    Composite.add(world, [
      topBarLeft,
      topBarRight,
      spinner,
      pin,
      constraint,
      ...walls,
      ...initialBalls,
    ]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(currentEngine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    Render.run(render);
    const runner = runnerRef.current;
    Runner.run(runner, currentEngine);

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });

    return () => {
      if (spinIntervalRef.current) {
        clearInterval(spinIntervalRef.current);
      }
      if (leftBlowerIntervalRef.current) {
        clearInterval(leftBlowerIntervalRef.current);
      }
      if (rightBlowerIntervalRef.current) {
        clearInterval(rightBlowerIntervalRef.current);
      }
      if (valveIntervalRef.current) {
        clearInterval(valveIntervalRef.current);
      }
      Runner.stop(runner);
      Render.stop(render);
      Composite.clear(world, false);
      Engine.clear(currentEngine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [sceneRef]);

  return {
    isSpinning,
    startSpinning,
    stopSpinning,
    isLeftBlowing,
    startLeftBlowing,
    stopLeftBlowing,
    isRightBlowing,
    startRightBlowing,
    stopRightBlowing,
    isValveActive,
    startValve,
    stopValve,
  };
};
