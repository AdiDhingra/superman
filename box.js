class Box extends BaseClass {
    constructor(x, y){
      super(x,y,100,100);
    
     
      this.Visiblity=255;
      
    }
  display(){
   
    
    if(this.body.speed<100){
      super.display();
     
    }
    else{
      World.remove(world,this.body);
      
      push();
      this.Visiblity=this.Visiblity-5;
     
      tint(255,this.Visiblity)
   
      rect(0,0,this.width,this.height);
      pop();
    }
}
};