var helicopterIMG, helicopterSprite, packageSprite,packageIMG,downlineIMG,downlineSprite,sidelineIMG,sidelineSprite1,sidelineSprite2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
    downlineIMG=loadImage("theline.png")
	sidelineIMG=loadImage("thesidewaysline.png")
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


	groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(255)

    downlineSprite=createSprite(width/2, 650,200,20);
	downlineSprite.addImage=(downlineIMG)
	downlineSprite.shapeColor=color(255,0,0)
	

	sidelineSprite1=createSprite(width/2, 550,20,200);
	sidelineSprite1.addImage=(downlineIMG)
	sidelineSprite1.shapeColor=color(255,0,0)
	

	sidelineSprite2=createSprite(width/2, 550,20,200);
	sidelineSprite2.addImage=(downlineIMG)
	sidelineSprite2.shapeColor=color(255,0,0)  
   

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  sidelineSprite1.position.x=(x=500)
  sidelineSprite1.position.y=(y=550)
  
  sidelineSprite2.position.x=(x=300)
  sidelineSprite2.position.y=(y=550)
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody, false);
  }
}