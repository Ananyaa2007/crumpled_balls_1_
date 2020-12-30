
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
    rect1 = new Dustbin(800,590,20,200);
    rect2 = new Dustbin(1000,590,20,200);
    rect3 = new Dustbin(905,648,200,20,);
    paper = new Paper(200,300);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();

  keyPressed();
}

function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.pos, {x:2555 , y:-85});
}
}