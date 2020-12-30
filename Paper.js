class Paper  {
    constructor(x,y)   {
        var options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,23,options);

        
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            fill("white");
            ellipse(0,0,23,23);
            pop();
        }

}