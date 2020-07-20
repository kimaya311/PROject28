

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var crump,ground;
var dustbin, string;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	crump = new Paper(100,250,70);
	dustbin = new bin();
	string = new SlingShot(crump.body,{x:100,y:400});
	console.log(ground);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  ground.display();
  crump.display();
  dustbin.display();
  string.display();
  drawSprites();
}
function mouseDragged (){
	Matter.Body.setPosition(crump.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased (){
	
	string.fly();
	
	
	}




