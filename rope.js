class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            point:{x:this.offsetX,y:this.offsetY}
        }
        
           this.rope = Constraint.create(options)
            World.add(world,this.chain)

        }

display(){

var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
strokeWeight(2)

var Anchor1x=pointA.x;
var Anchor1y=pointA.y;

var Anchor2x=pointb.x+this.offsetX
var Anchor2y=pointb.y+this.offsetY
line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);


}

}