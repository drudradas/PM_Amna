class Boy {
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'density':5,
            'friction':0.3,
            'restitution':1
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options); // the width and height of the object was too big 
                                                            //so the stone couldnt go past it . I reduced them to 10,10
        this.width = 130;
        this.height = 180;
        this.image = loadImage("images/boy.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);

        //fill("yellow");
        //rect(0, 0, this.width, this.height);
    
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}