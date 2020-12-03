class Ball{
 constructor (x,y){
 var options={
   isStatic:false,
   restitution:0.1,
   friction:0.5,
   density:1.2

 }
    this.body=Bodies.circle(x,y,20,options);
    this.radius=10;
    World.add(world, this.body)
 }
   display(){
   var pos=this.body.position;
   ellipseMode(RADIUS)
   fill("yellow")
   ellipse(pos.x,pos.y,this.radius*2,this.radius*2)

   }


}