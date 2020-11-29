
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground;
var tree;
var boy;
var sling;

function preload()
{
		
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,700,1200,70);
	tree= new Tree(0,0,470,450);
	boy= new Boy(0,0,250,250);
	Mango1= new Mango(794,294,34);
	Mango2= new Mango(630,344,34);
	Mango3= new Mango(726,304,34);
	Mango4= new Mango(752,380,34);
	Mango5= new Mango(771,356,34);
  stone= new Stone(134,550,45,45);

    sling= new SlingShot(stone.body,{x:134,y:550});

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 


  drawSprites();
  ground.display();
  tree.display();
  boy.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  stone.display();
  detectCollision(stone,Mango1);
  detectCollision(stone,Mango2);
  detectCollision(stone,Mango3);
  detectCollision(stone,Mango4);
  detectCollision(stone,Mango5);
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});	
}

function mouseReleased(){
	sling.fly();
  
  }

function detectCollision(Lstone,LMango){
    MangoBodyPosition=LMango.body.position;
    stoneBodyPosition=Lstone.body.position ;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.x);
   
    if(distance<=LMango.radius+Lstone.radius)
    {
      Matter.Body.setStatic(LMango.body,false);
     // console.log(LMango.radius);
      //onsole.log(Lstone.radius);
     // console.log(distance);
  
    }
  }



