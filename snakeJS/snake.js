class Snake {

    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.positionX = 0;
        this.positionY = 0;

        this.speedX = 1;
        this.speedY = 0;
        
        this.square = 40;
        this.isAlive = true;

        this.numberOfColums = Math.floor(width / this.square) - 1;
        this.numberOfRows = Math.floor(height / this.square) - 1;
        console.log(this.numberOfRows);

        document.addEventListener('keyup', (event) => {
            this.handleKeyboard(event.keyCode)
        });
    }

    handleKeyboard(keyCode) {
        switch(keyCode) {
            case 37:
                this.speedX = -1;
                this.speedY = 0;
                break;
            case 38:
                this.speedX = 0;
                this.speedY = -1;
                break;
            case 39:
                this.speedX = 1;
                this.speedY = 0;
                break;
            case 40:
                this.speedX = 0;
                this.speedY = 1;
                break;
        }
    }

    update() {
        if (this.isAlive) {
            this._updateAlive();
             
        } else {
            this._updateDead;
        }
    }

    _updateAlive() {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        if (this.positionX > this.numberOfColums) {
            this.positionX = 0;
            this.isAlive = false;
        }
    }
    _updateDead() {

    }

    draw() {
        if (this.isAlive) {
            this._drawAlive();
        } else {
            this._drawGameOver();
        }
 
    }

    _drawAlive() {
        this.context.fillStyle = 'black';
        this.context.fillRect(
            this.positionX * this.cuadrito, 
            this.positionY * this.cuadrito, 
            this.cuadrito, 
            this.cuadrito
        );
    }

    _drawGameOver() {
        this.context.font = "30px Comic Sans MS";
        this.context.fillStyle = "red";
        this.context.textAlign = "center";
        this.context.fillText("Game Over", this.width/2, this.height/2);
        
    }


    _increaseSizeWhenEatApple() {


    }
}