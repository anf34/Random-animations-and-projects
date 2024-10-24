//RG colour selector :)

//Next to Implement:

//Instead of changing b by moving Y, introduce a slider.

//Then watch git videos!

//When pressing on background, tells you the hex and
//numbered value for that colour

function setup() {
  createCanvas(550, 450);
  
  slider_gap = 20

  // Create  sliders and place at the top of the canvas.
  Rslider = createSlider(0, 255, 0);
  Rslider.position(10, 10);
  Rslider.size(160);
  
  Gslider = createSlider(0, 255, 0);
  Gslider.position(10, 10 + 1 * slider_gap);
  Gslider.size(160);
  
  Bslider = createSlider(0, 255, 0);
  Bslider.position(10, 10 + 2 * slider_gap);
  Bslider.size(160);
  
  //Aslider = createSlider(0, 1000, 0);
  //Aslider.position(10, 10 + 3 * slider_gap);
  //Aslider.size(160);
  
  
 
}


function draw() {
  r = Rslider.value();
  g = Gslider.value();
  b = Bslider.value();
  //a = Aslider.value()/1000;
  
  noStroke();

  s = 10; //square size

  //The loop below draws squares for entire
  //width of window.
  i = 0;
  while (i < width) {
    //draws squares across the height of window
    //for a given width
    j = 0;
    while (j < height) {
      fill(r, g, b);
      rect(i, j, s);
      j += s;
    }

    i += s;
  }
}
