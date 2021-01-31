class   Drop{

constructor(){
var options={
    friction:0.1
}

this.body=Bodies.circle(random(0,400),0,10)
this.radius=10
World.add(world,this.body)
}

display(){
 var pos=this.body.position
 fill("blue")
 
ellipseMode(CENTER)
ellipse(pos.x,pos.y,20,20)



}

}