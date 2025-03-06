import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, onSnake } from './snake.js';
import { update as updateFood, draw as drawFood, food } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
let score = 0;
const gameBoard = document.getElementById('game-board');
const scoreElement = document.getElementById('score');

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log('Render');
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
  updateScore();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function updateScore() {
  console.log('updateScore called');
  console.log('Current food position:', food);
  console.log('Current snake head position:', getSnakeHead());
  if (onSnake(food)) {
    console.log('Snake is on food');
    score++;
    console.log(`Score updated: ${score}`);
    scoreElement.textContent = `Score: ${score}`;
  } else {
    console.log('Snake is not on food');
  }
}

