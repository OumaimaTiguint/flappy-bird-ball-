function Bird() {
    //start the bird at the center of the window
    this.y = height/2; 
    this.x = 64;

    this.gravity = 0.5;
    this.lift = -15;
    this.velocity = 0;

    //draw the bird
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }
    
    //make the bird go up
    this.up = function() {
        this.velocity += this.lift;
    }

    //push the bird down
    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}