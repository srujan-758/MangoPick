class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            //'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options);        
        this.image= loadImage("mango.png");
        this.radius= radius;
        //this.height=height;
        World.add(world,this.body);
      
     
    }
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        //rectMode(CENTER);
        //fill("blue");
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop();
    }
}