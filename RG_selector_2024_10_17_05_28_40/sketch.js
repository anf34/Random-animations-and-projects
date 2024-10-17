//RG colour selector :)
//IN PROGRESS
//Aim: display all the RGB colours in a window.

//Next to Implement:

//Instead of changing b by moving Y, introduce a slider.

//When pressing on background, tells you the hex and
//numbered value for that colour

function setup() {
  createCanvas(450, 450);
}

function draw() {
  b = 255;
  b = map(mouseY, 0, height, 0, 255);
  noStroke();

  s = 50; //square size

  //The loop below draws squares for entire
  //width of window.
  i = 0;
  while (i < width) {
    //draws squares across the height of window
    //for a given width
    j = 0;
    while (j < height) {
      r = map(i, 0, width, 0, 255);
      g = map(j, 0, height, 0, 255);
      fill(r, g, b);
      rect(i, j, s);
      j += s;
    }

    i += s;
  }
}
