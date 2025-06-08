import { useEffect, useRef } from "react";
import Matter from "matter-js";

// POPRAWKA: Typ argumentu został zmieniony, aby akceptować 'null'
export const useNewtonsCradle = (
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
      Constraint,
      Mouse,
      MouseConstraint,
    } = Matter;

    const currentEngine = engineRef.current;
    const world = currentEngine.world;
    const sceneElement = sceneRef.current;

    // To zabezpieczenie jest kluczowe i już tu było
    if (!sceneElement) return;

    const render = Render.create({
      element: sceneElement,
      engine: currentEngine,
      options: {
        width: sceneElement.clientWidth,
        height: sceneElement.clientHeight,
        wireframes: false,
        background: "transparent",
        showVelocity: true,
      },
    });

    const blueShades = [
      "#87CEEB",
      "#4682B4",
      "#5F9EA0",
      "#B0C4DE",
      "#ADD8E6",
      "#87CEFA",
      "#00BFFF",
    ];

    const newtonsCradle = (
      xx: number,
      yy: number,
      number: number,
      size: number,
      length: number
    ) => {
      const cradle = Composite.create({ label: "Newtons Cradle" });

      for (let i = 0; i < number; i++) {
        const separation = 1.9;
        const circle = Bodies.circle(
          xx + i * (size * separation),
          yy + length,
          size,
          {
            inertia: Infinity,
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            slop: size * 0.02,
            render: {
              fillStyle: blueShades[i % blueShades.length],
            },
          }
        );
        const constraint = Constraint.create({
          pointA: { x: xx + i * (size * separation), y: yy },
          bodyB: circle,
        });
        Composite.add(cradle, circle);
        Composite.add(cradle, constraint);
      }
      return cradle;
    };

    const cradle1 = newtonsCradle(
      sceneElement.clientWidth * 0.35,
      100,
      5,
      30,
      200
    );
    Body.translate(cradle1.bodies[0], { x: -180, y: -100 });
    Composite.add(world, cradle1);

    const cradle2 = newtonsCradle(
      sceneElement.clientWidth * 0.35,
      380,
      7,
      20,
      140
    );
    Body.translate(cradle2.bodies[0], { x: -140, y: -100 });
    Composite.add(world, cradle2);

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
