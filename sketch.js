
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var umb
var ground;
var  drops=[]
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here...........
ground=Bodies.rectangle(200,360,400,10)
umb=new Umb(50,300)


for(var i=0;i<100;i++){
	drops.push(new Drop())
}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,400,10)
umb.display()


for(var j=0;j<drops.length;j++){ 
    drops[j].display();
    }


  drawSprites();
 
}



