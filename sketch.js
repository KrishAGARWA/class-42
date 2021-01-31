
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var umb
var thunder,thunimg;
var thu,thi,thui;
var ground;
var  drops=[]
var bgGroup
function preload()
{
thunderimg=loadImage("1.png")
thu=loadImage("2.png")
thi=loadImage("3.png")
thui=loadImage("4.png")	
}

function setup() {
	createCanvas(400, 400);
bgGroup= new Group()
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here...........
ground=Bodies.rectangle(200,360,400,10)
umb=new Umb(50,300)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,400,10)
umb.display()

if(frameCount%120===0){
for(var i=0;i<100;i=i+40){
	drops.push(new Drop())
}
}
for(var j=0;j<drops.length;j++){ 
    drops[j].display();
    }
   
   if (frameCount%60===0) {
     thunder=createSprite(random(0,400),50,10,10)
thunder.scale=0.3
 var rand =Math.round(random(1,4))

   switch (rand) {
     case 1:thunder.addImage(thunderimg)
       break;
   case 2:thunder.addImage(thu)
       break;
       case 3:thunder.addImage(thi)
       break;
       case 4:thunder.addImage(thui)
       break;
     default:
       break;
   }
bgGroup.add(thunder)

 if (frameCount%120===0) {
     bgGroup.destroyEach()
   }
   }


  
  



  drawSprites();
 
}



