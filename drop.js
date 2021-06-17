class createDrop {

    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.002
        };
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 10;
        World.add(world, this.body);
    }
    display() {
        
        var pos = this.body.position;
        fill(67, 176, 177);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }
    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {
                x: random(0, 400),
                y: random(-10, 0)
            });
        }
    }
 
}