const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [255, 225, 225];

let boy;
let boyAnimR;
let boyAnimL;

function preload() {
  const boyRWSpriteSheet = loadSpriteSheet("boy/bRw.png", 30, 30, 3);
  const boyLWSpriteSheet = loadSpriteSheet("boy/bLw.png", 30, 30, 3);
  boyAnimR = loadAnimation(boyRWSpriteSheet);
  boyAnimL = loadAnimation(boyLWSpriteSheet);
  boy = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 30, 30);
  boy.moveSpeed = 4;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  boy.addAnimation("moveR", boyAnimR);
  boy.addAnimation("moveL", boyAnimL);
  boy.addImage("still", loadImage("boy/bI.png"));
  boy.setDefaultCollider()
}


function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("moveR");
  } else {
    object.changeImage("still");
  }
  boy.limitSpeed(boy.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(boy);
}