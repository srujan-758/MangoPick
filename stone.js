class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image= loadImage("stone.png");
        this.radius= radius;
       World.add(world,this.body);
      
     
    }
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        //console.log(pos.x);
       //s console.log(pos.y);
        rotate(angle);
        //rectMode(CENTER);
        //fill("blue");
        imageMode(CENTER);
        image(this.image,0,0, 45,45);
        pop();
    }
}