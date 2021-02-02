const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1, ground2, ground3, ground4,ground5
var divisions = []
var plinkos = []
var particles = []

var divisionsHeight=270




function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(300,795,600,10);
  ground2 = new Ground(300,5,600,10);
  ground3 = new Ground(5,400,10,800);
  ground4 = new Ground(595,400,10,800);
  ground5 = new Divisions(300,785,550,10);
  ground5 = new Divisions(300,785,550,10);
  

  //Divisions
  for(var k = 20; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionsHeight/2-10, 10, divisionsHeight))
  }

  //Plinkos
  for (var j = 55; j <= width; j=j+50){

    plinkos.push(new Plinko(j,75))
  }

  
  for (var j = 25; j <= width-10; j=j+50){

    plinkos.push(new Plinko(j,175))
  }

  for (var j = 55; j <= width; j=j+50){

    plinkos.push(new Plinko(j,275))
  }

  
  for (var j = 25; j <= width-10; j=j+50){

    plinkos.push(new Plinko(j,375))
  }

  //Particles


  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()

  if(frameCount%50===0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
  }
  

  for(var k = 0; k < divisions.length; k ++){
    divisions[k].display()
  }

  for(var j = 0; j < plinkos.length; j ++){
    plinkos[j].display()
  }

  for(var a = 0; a < particles.length; a ++){
    particles[a].display()
  }
}