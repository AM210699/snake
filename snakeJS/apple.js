class Apple {

    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
        

        this.positionX = 0;
        this.positionY = 0;

        this.square = 20;

        this.random = Math.floor(Math.random() * 30) + 1;
    }

    update() {
        if ( this.positionX === 0 && this.positionX !== Snake.positionX && this.positionY === 0 &&  this.positionY !== Snake.positionY) {
             this.positionX = this.random;
             this.positionY = this.random;
        }

    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(
            this.positionX * this.square, 
            this.positionY * this.square, 
            this.square, 
            this.square);

    }



}