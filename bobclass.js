class Bobclass{

    constructer(x,y,r){
    
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.r=r;
    
    this.body = Bodies.circle(x,y,(this.r)/2,options);
    World.add(world,this.body);
    }
    
    display(){
    
    var paperpos = this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(225,0,225);
    ellipse(paperpos.x,paperpos.y,this.r,this.r)
    pop()
    }
    
    }