const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const sides = 800; 
const radius = 600;

const engine = Engine.create();
const { world } = engine;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
      wireframes: false,
      sides,
      radius
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
  mouse: Mouse.create(render.canvas)
}));


// walls
const walls = [
    Bodies.polygon(400, 0, 800, 40, { isStatic: true }),
    Bodies.polygon(400, 600, 800, 40, { isStatic: true }),

];
World.add(world, walls);

// Random Shapes 
for (let i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
        World.add(world, Bodies.polygon(Math.random() * sides, Math.random() * radius, 50, 50));
    } else {
        World.add(world, Bodies.trapezoid(Math.random() * sides, Math.random() * radius, 35, {
            render: {
                fillStyle: 'yellow'
            }
        }))
    }
}

