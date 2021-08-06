const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball
var con
var ball2
var con2

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution : 0.8
  }

  ball = Bodies.circle(200, 50, 10, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(350, 10, 12, ball_options);
  World.add(world, ball2);

  var con_options = {
    pointA : {x : 200, y : 20},
    bodyB : ball,
    pointB : {x : 0, y : 0},
    length : 100,
    stiffness : 0.1
  }

  con = Matter.Constraint.create(con_options);
  World.add(world, con);

  var con_options2 = {
    pointA : {x : 0, y : 0},
    bodyA : ball,
    bodyB : ball2,
    pointB : {x : 0, y : 0},
    length : 100,
    stiffness : 0.1
  }

  con2 = Matter.Constraint.create(con_options2);
  World.add(world, con2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 10);

  ellipse(ball2.position.x, ball2.position.y, 12)

  strokeWeight(2);
  stroke("white");
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  line(ball.position.x, ball.position.y, ball2.position.x, ball2.position.y);


  
}

function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0.05, y : 0});
  }
}

