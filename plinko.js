class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
            
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world,this.body);
    
      
   }
     display(){
      var plinkopos=this.body.position;
      push()
      translate(plinkopos.x,plinkopos.y);
      circle(plinkopos.x,plinkopos.y,20);
      rectMode(CENTER);
      pop()
    }
}