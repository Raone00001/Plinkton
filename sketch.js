const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var division1, division2, division3, division4, division5, division6, division7;

var particles = [];
var plinkos = [];

function setup() {
  var canvas = createCanvas(485,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,height,800,20);

    division1 = new Division(5,700,10,300);
    division2 = new Division(85,700,10,300);
    division3 = new Division(165,700,10,300);
    division4 = new Division(240,700,10,300);
    division5 = new Division(325,700,10,300);
    division6 = new Division(400,700,10,300);
    division7 = new Division(480,700,10,300);

    for(var i = 40; i <= width; i = i+50){

        plinkos.push(new Plinko(i,75));
        console.log(plinkos);

    }

    for(var i = 15; i <= width-10; i = i+50){

      plinkos.push(new Plinko(i,175));
      console.log(plinkos);

    }

    for(var i = 40; i <= width; i = i+50){

      plinkos.push(new Plinko(i,275));
      console.log(plinkos);

    }

    for(var i = 15; i <= width; i = i+50){

      plinkos.push(new Plinko(i,375));
      console.log(plinkos);

    }

    Engine.run(engine);
  }

function draw() {
  background("black");
  Engine.update(engine);  

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  if (frameCount % 15 === 0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

  }

  for(var j = 0; j < plinkos.length; j++){

      plinkos[j].display();

  }

  for(var k = 0; k < particles.length; k++){

      particles[k].display();

  }


}