import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const useClothSwing = (
  sceneRef: React.RefObject<HTMLDivElement | null>
) => {
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(Matter.Runner.create());

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Body,
      Bodies,
      Composite,
      Composites,
      Mouse,
      MouseConstraint,
    } = Matter;

    const currentEngine = engineRef.current;
    const world = currentEngine.world;
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
      },
    });

    const createCloth = (
      xx: number,
      yy: number,
      columns: number,
      rows: number,
      columnGap: number,
      rowGap: number,
      crossBrace: boolean,
      particleRadius: number
    ) => {
      const group = Body.nextGroup(true);

      const defaultParticleOptions = {
        inertia: Infinity,
        friction: 0.00001,
        collisionFilter: { group: group },
        render: {
          visible: false,
          fillStyle: "#e74c3c",
        },
      };

      const defaultConstraintOptions = {
        stiffness: 0.06,
        render: {
          type: "line",
          anchors: false,
          strokeStyle: "#ffffff",
          lineWidth: 1,
        },
      };

      const cloth = Composites.stack(
        xx,
        yy,
        columns,
        rows,
        columnGap,
        rowGap,
        function (x: number, y: number) {
          return Bodies.circle(x, y, particleRadius, defaultParticleOptions);
        }
      );

      Composites.mesh(
        cloth,
        columns,
        rows,
        crossBrace,
        defaultConstraintOptions
      );

      cloth.label = "Cloth Body";
      return cloth;
    };

    const cloth = createCloth(160, 126, 24, 12, 5, 5, false, 8);

    for (let i = 0; i < 24; i++) {
      cloth.bodies[i].isStatic = true;
    }

    const obstacles = [
      Bodies.circle(320, 442, 56, {
        isStatic: true,
        render: { fillStyle: "#87CEEB" },
      }),
      Bodies.rectangle(480, 442, 56, 56, {
        isStatic: true,
        render: { fillStyle: "#5F9EA0" },
      }),
      Bodies.rectangle(400, sceneElement.clientHeight - 25, 800, 50, {
        isStatic: true,
        render: { fillStyle: "#060a19" },
      }),
    ];

    Composite.add(world, [cloth, ...obstacles]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(currentEngine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.98,
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
      max: { x: 800, y: 600 },
    });

    return () => {
      Runner.stop(runner);
      Render.stop(render);
      Composite.clear(world, false);
      Engine.clear(currentEngine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [sceneRef]);
};
