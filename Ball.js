class Ball{
constructor(x,y,w,h,angle){
var option = {

    density: 1,
    frictionAir : 0.005 
}
this.body = Bodies.rectangle(x,y,w,h,option)
this.w = w
this.h = h
World.add(World,this.body)
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push()
translate(pos.x,pos.y)
rotate(angle)  
ellipse(0,0,this.w,this.h)
pop()  
}
}