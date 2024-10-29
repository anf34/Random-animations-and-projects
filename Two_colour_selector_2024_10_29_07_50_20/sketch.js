//Two colour selector :)

//After choosing a colour value for red green or blue, this program displays all possible combinations for your input colour

////Next to implement: 

//Remove the copy and pasted code from the program!!!

//a button that allows you to toggle between red green and blue instead of doing k = 0,1,2, yuck

//When pressing on background, tells you the hex and numbered value for that colour

k = 2;
function setup() {
  createCanvas(450, 450);

  // Creates a slider and places it at the top of the canvas.
  slider = createSlider(0, 255, 0);
  slider.position(10, 10);
  slider.size(160);
}

function draw() {
  s = 10; //square size
  noStroke();

    
    //The loop below draws squares for entire
    //width of window.
    i = 0;
    while (i < width) {
      
      //Draws squares across the height of window for a given width
      j = 0;
      while (j < height) {
        if (k == 0){
          r = slider.value()
          b = map(j, 0, width, 0, 255);
          g = map(i, 0, height, 0, 255);
          
        } else if (k == 1){
          r = map(i, 0, height, 0, 255);
          b = map(j, 0, width, 0, 255);
          g = slider.value()
          
        } else if (k == 2){
          r = map(i, 0, height, 0, 255);
          g = map(j, 0, width, 0, 255);
          b = slider.value()
        } else{
          k = 0
          print("Setting red as the slider value.")
          continue
        }
        fill(r, g, b);
        rect(i, j, s);
        j += s;
      }
      i += s;
    }
  
}

function mousePressed(){
  print("for k = 0")
  print(round(mouseX/width * 255), round(mouseY/height * 255), r)
}
