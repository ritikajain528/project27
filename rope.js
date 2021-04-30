class Rope{
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=offsetx;
        this.offsety=offsety;
        var option={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetx,y:this.offsety}
        }


this.rope=Matter.constraint.create(op);
World.add(world,this.offsetx.rope);
    }
display(){
var point1=this.rope.bodyA.position;
var point2=this.rope.bodyA.position;

strokeweight(2);

var anchor1x=point1.x;
var anchor1y=point1.y;

var anchor2x=point2.x+this.offsetx;
var anchor2y=point2.y+this.offsety;

Line(anchor1x,anchor1y,anchor2x,anchor2y);
}


   
}













































