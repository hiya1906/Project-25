
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var block;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(50,500,40);


	fill("yellow");
	ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true});


	World.add(world, ground);
	block = new dustbin(450,650,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  rect(ground.position.x,ground.position.y,width,10);
  ball.display();
  block.display();
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-200});
	}
}
