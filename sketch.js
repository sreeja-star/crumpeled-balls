var ground,ball;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new Ground(600,650,1200,20);
	 ball=new Ball(50,500)
	 box1=new Box(850,590,20,100)
	 box2=new Box(930,630,141,20);
     box3=new Box(1000,590,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
 // console.log(box1);
 //keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
  }


}



