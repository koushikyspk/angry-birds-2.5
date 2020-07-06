class chain{
constructor(bodya,bodyb){
    var options={
        bodyA: bodya,
        bodyB: bodyb,
        stiffnes:0.05,
        length:10
    }
    this.Chain=Constraint.create(options);
    World.add(world,this.Chain)
}
display(){
    var pointa=this.Chain.bodyA.position;
    var pointb=this.Chain.bodyB.position;
    strokeWeight(4)
    line(pointa.x,pointa.y,pointb.x,pointb.y);
}

 
} 