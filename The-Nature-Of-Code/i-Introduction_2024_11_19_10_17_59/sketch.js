//Following along to Dan Schiffman's nature of code.
//Make sure you reread this whole introduction when finishing the book.

function setup() {
  createCanvas(400, 400);
}

x = 10;
y = 10;
ball_size = 30;
v_x = 1;
v_y = 2;

function draw() {
  background(255,223,0);
  fill(86,190,255);
  noStroke();
  ellipse(x, y, ball_size);
  x = x + v_x;
  y = y + v_y;
}