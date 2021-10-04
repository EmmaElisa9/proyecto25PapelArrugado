
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, papel;
var world;


function setup() {
	createCanvas(1350,600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	papel= new Paper(200,550,65);
	dustbinObj=new dustbin(1200,550);

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyDown("UP_ARROW")){

		Matter.Body.applyForce(papel.body,papel.body.position,{x:10,y:-20});

	}
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  keyPressed();

  groundObject.display();
  papel.display();
  dustbinObj.display();

}

