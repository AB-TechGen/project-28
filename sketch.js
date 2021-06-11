
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree
var treeImage

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	stone1 = new Stone(235, 600, 40, 40)
	

	mango1 = new Mango(1200, 300, 40, 40)
	mango2 = new Mango(1300, 300, 40, 40)
	mango3 = new Mango(1400, 300, 40, 40)
	mango4 = new Mango(1500, 300, 40, 40)
	mango5 = new Mango(1450, 200, 40, 40)
	mango6 = new Mango(1350, 200, 40, 40)

	tree = new Tree(1200, 150, 400, 500)

	launcher = new Launcher(stone1.body, {x: 160, y:460})


	boy = createSprite(250, 550, 20, 20)
	boy.addImage("Standing", boyImage);
	boy.scale = 0.15

	ground = new Ground(width/2, height-50, 1600, 5)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display()
  tree.display()
  stone1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  launcher.display()

  textSize(20)
  fill("green")
  text("Press Space to get another chance to play!", 100, 50)

  detectCollision(stone1, mango1)
  detectCollision(stone1, mango2)
  detectCollision(stone1, mango3)
  detectCollision(stone1, mango4)
  detectCollision(stone1, mango5)
  detectCollision(stone1, mango6)
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	launcher.fly()
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x: 235, y:600})
		launcher.attach(stone1.body)
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) //console.log(distance) // console.log(lmango.r+lstone.r) 
	if(distance<=lmango.r+lstone.r) { 
	   Matter.Body.setStatic(lmango.body,false); }
}


/*lstone.body.position.x - lmango.body.position.x < lmango.diametre + lstone.diameter
	    && lmango.body.position.x - lstone.body.position.x < lmango.diametre + lstone.diameter
		&& lstone.body.position.y - lmango.body.position.y < lmango.diametre + lstone.diameter
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diameter*/