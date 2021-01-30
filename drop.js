class   Drop{

constructor(){
this.body=Bodies.circle(random(0,400),200,10)
this.radius=10
World.add(world,this.body)
}

display(){
 var pos=this.body.position
ellipseMode(CENTER)
ellipse(pos.x,pos.y,20,20)



}

}