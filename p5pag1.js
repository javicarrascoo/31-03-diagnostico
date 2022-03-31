let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  createCanvas(1920,500);
  noStroke();
}

function draw() {
  background(191,220,194);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 66, 66);
}
