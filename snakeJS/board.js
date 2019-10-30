class Board {

    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
    }

    update() {
    }

    draw() {
        this.context.fillStyle = 'lightGreen';
        this.context.strokeStyle = 'darkGreen';
        this.context.fillRect(0, 0, this.width, this.height);
    }
}

