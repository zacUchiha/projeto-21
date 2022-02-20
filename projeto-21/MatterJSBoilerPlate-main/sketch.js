
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boll;
var groundObject,leftSide,rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	// Crie os corpos aqui.

	var ball_options = {
		isStatic:false,
		restitution:0.03,
		friction:0,
		density:1.2
	}
	 boll = Bodies.circle(200, 200, 15,ball_options);
	 World.add(world, boll);
	groundObject = new Ground(width/2,670,width,20);
	leftSide = new Ground(500,600,20,120);
	rightSide = new Ground(600,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(boll.position.x, boll.position.y, 15, 15);
  groundObject.display();
  leftSide.display();
  rightSide.display();
}
function keyPressed(){

 if (keyCode == UP_ARROW){
	Matter.Body.applyForce(boll,boll.position,{x:10,y:-10});
 }
}



