let stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight).id('starsCanvas');
    generateStars();
}

function draw() {
    background(0);

    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].display();
    }
}

function generateStars() {
    for (let i = 0; i < 100; i++) {
        let size = random(1, 5);
        let speed = map(size, 1, 5, 0.2, 0.5);
        stars.push(new Star(random(width), random(height), size, speed));
    }
}

class Star {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        this.x -= this.speed;
        if (this.x < 0) {
            this.x = width;
            this.y = random(height);
        }
    }

    display() {
        noStroke();
        fill(255, 255, 255, 150);
        ellipse(this.x, this.y, this.size * 10, this.size * 10);
    }
}

window.addEventListener('resize', function () {
    resizeCanvas(windowWidth, windowHeight);
});
