class Particles{

    constructor(x, y, r) {
        var options = {
          restitution:0.4
        }

        this.radius=r
        this.x=x
        this.y=y
        this.body=Bodies.circle(x,y, this.radius, options);
        this.color = color(random(0,255), random(0, 255), random(0, 255))

        World.add(world,this.body)
        
}

display(){
    var pos =this.body.position;
    var angle=this.body.angle

    push();
    translate(pos.x, pos.y);
    rotate(angle)
    ellipseMode(RADIUS);
    noStroke()
    fill(this.color);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }

}