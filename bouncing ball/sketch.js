const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,obj;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }
obj = Bodies.rectangle(200,300,300,20,options);
World.add(world,obj);
console.log(obj.position.y);
var ballOptions={
  restitution:1.0
}
ball = Bodies.circle(200,100,20,ballOptions);
World.add(world,ball);
}

function draw() {

  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect (obj.position.x,obj.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}