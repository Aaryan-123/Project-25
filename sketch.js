
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
// var dustbinImg;
// var paperImg;
function preload()
{
	// dustbinImg = loadImage('Project25/dustbingreen.png');
	// paperImg = loadImage('Project25/paper.png');
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper();
	ground = new Ground(width / 2, height - 50, width, 10);

	// dustbin1 = new Dustbin(500,600,10,100);
	// dustbin2 = new Dustbin(700,600,10,100);
	dustBottom = new Dustbin(600,590,180,180);
	// dustbin = createSprite(600,550);
	// dustbin.addImage(dustbinImg);
	
	// paper1 = createSprite(100,648.8);
	// paper1.addImage(paperImg);

	// var options = {
	// 	isStatic : true,
	// 	restitution : 0.3
	// }
	// dusbinObject = Bodies.rectangle(600,650,10,100,options);
    // World.add(world,dusbinObject);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  
//   dustbin1.display();
//   dustbin2.display();
  dustBottom.display();
  
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 145,y : -125});
	}
}

