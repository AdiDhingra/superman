
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hero
function preload()
{
	backgroundImg = loadImage("sprites/sky.jpg");
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;
	hero=new Hero(300,400,200,300)
	ground=new Ground(300,500,10000,10);
	//Create the Bodies Here.
	box1=new Box(300,290,50,20)
	box2=new Box(300,230,50,20)
	box4=new Box(400,290,50,20)
	box3=new Box(400,230,50,20)
	monster=new Enemy(800,310,100,100)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  hero.display();
  ground.display();
  box1.display();
  box2.display();
  box4.display();
  box3.display();
  monster.display();
  
  drawSprites();
 
}



