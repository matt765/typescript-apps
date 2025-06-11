import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const useWreckingBall = (
  sceneRef: React.RefObject<HTMLDivElement | null>
) => {
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(Matter.Runner.create());

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Composites,
      Constraint,
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
        showAngleIndicator: false,
      },
    });

    const rows = 12;
    const columns = 7;
    const stackHeight = sceneElement.clientHeight;
    const yy = stackHeight - 25 - 40 * rows;

    const stack = Composites.stack(
      sceneElement.clientWidth * 0.5,
      yy,
      columns,
      rows,
      0,
      0,
      function (x: number, y: number) {
        return Bodies.rectangle(x, y, 40, 40, {
          render: {
            fillStyle: "rgb(55, 82, 104)",
            strokeStyle: "rgb(255,255,255, 0.2)",
            lineWidth: 2,
          },
        });
      }
    );

    const walls = [
      Bodies.rectangle(
        sceneElement.clientWidth * 0.5,
        0,
        sceneElement.clientWidth,
        50,
        {
          isStatic: true,
          render: { fillStyle: "transparent" },
        }
      ),
      Bodies.rectangle(
        sceneElement.clientWidth * 0.5,
        sceneElement.clientHeight,
        sceneElement.clientWidth,
        50,
        {
          isStatic: true,
          render: { fillStyle: "transparent" },
        }
      ),
      Bodies.rectangle(
        sceneElement.clientWidth,
        sceneElement.clientHeight * 0.5,
        50,
        sceneElement.clientHeight,
        {
          isStatic: true,
          render: { fillStyle: "transparent" },
        }
      ),
      Bodies.rectangle(
        0,
        sceneElement.clientHeight * 0.5,
        50,
        sceneElement.clientHeight,
        {
          isStatic: true,
          render: { fillStyle: "transparent" },
        }
      ),
    ];

    const ball = Bodies.circle(100, sceneElement.clientHeight * 0.67, 50, {
      density: 0.04,
      frictionAir: 0.005,
      render: {
        fillStyle: "#87CEEB",
        strokeStyle: "#95a5a6",
        lineWidth: 2,
      },
    });

    const ballConstraint = Constraint.create({
      pointA: { x: sceneElement.clientWidth * 0.375, y: 100 },
      bodyB: ball,
      render: {
        strokeStyle: "#95a5a6",
        lineWidth: 4,
      },
    });

    Composite.add(world, [stack, ...walls, ball, ballConstraint]);

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
      max: { x: sceneElement.clientWidth, y: sceneElement.clientHeight },
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
