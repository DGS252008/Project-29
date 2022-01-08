const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8,
    block9, block10, block11, block12, block13, block14, block15, block16;
var block_1, block_2, block_3, block_4, 
    block_5, block_6, block_7, block_8, block_9;
var ground1, ground2;
var shooter, sling;
var polygon;

var gameState = "onSling";

function preload(){
  polygon = loadImage('polygon.png')
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);
  
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);

  block9 = new Block(390, 155, 30, 40);

  block_1 = new Block(130, 0, 30, 40);
  block_2 = new Block(160, 0, 30, 40);
  block_3 = new Block(190, 0, 30, 40);
  block_4 = new Block(220, 0, 30, 40);
  block_5 = new Block(250, 0, 30, 40);
  
  block_6 = new Block(160, 0, 30, 40);
  block_7 = new Block(190, 0, 30, 40);
  block_8 = new Block(220, 0, 30, 40);

  block_9 = new Block(190, 0, 30, 40);


  ground1 = new Ground(380, 300, 350, 20);
  ground2 = new Ground(780, 500, 350, 20);

  shooter = Bodies.circle(100, 300, 20);
  World.add(world, shooter)
  
  sling = new SlingShot(shooter, {x:50, y:200});



  Engine.run(engine);
}

function draw() {
  background("#bee8fa");  
 
  block1.display();
  block2.display();
  block5.display();
  block3.display();
  block4.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block_1.display();
  block_2.display();
  block_5.display();
  block_3.display();
  block_4.display();
  block_6.display();
  block_7.display();
  block_8.display();
  block_9.display();

  imageMode(CENTER);
  image(polygon, shooter.position.x, shooter.position.y, 40, 40);

  ground1.display();
  ground2.display();

  sling.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  SlingShot.fly();
  gameState = "launched";
}