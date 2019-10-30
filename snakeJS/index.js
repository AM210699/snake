class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');

        this.board = new Board(this.canvas.width, this.canvas.height, this.context);
        this.snake = new Snake(this.canvas.width, this.canvas.height, this.context);
        this.apple = new Apple(this.canvas.width, this.canvas.height, this.context);
    }

    gameLoop() {
        this.board.update();
        this.snake.update();
        this.apple.update();

        this.board.draw();
        this.snake.draw();
        this.apple.draw();
    }
}

const game = new Game();

setInterval(function() {
    game.gameLoop();
}, 1000);


