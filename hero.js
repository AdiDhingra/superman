class Hero{
    constructor(x,y,width,height){
        var options={
           
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/superman.jpg")
        this.width=width;
        this.height=height;
       
        
        World.add(world,this.body);
       
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        this.body.position.x = mouseX;
    this.body.position.y = mouseY;
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        
        image(this.image, 0, 0, this.width, this.height,0);
   
         pop();
    }
}