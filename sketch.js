var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rec1,rec2,rec3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rec1=createSprite(500,560,20,200)
	rec2=createSprite(350,560,20,200)
	rec3=createSprite(420,650,150,20)
	


	//The bottom is a static body which is 20 pixels tall and 200 pixels wide.
    //The sides are 100 pixels tall and 20 pixels wide.


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
var option={
	
	isStatic:true
}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,option);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
  
 

}
 }