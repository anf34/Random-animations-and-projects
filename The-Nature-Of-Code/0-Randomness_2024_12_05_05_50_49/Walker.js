//Walker(mode) has 3 modes. Replace mode with 'aimless', 'bias' or 'dynamic bias'.

//A walker is a point that can move in any of the 4 cardinal directions.
//A walker's mode defaults to aimless if mode is not specified and probabilities of moving in a direction default to 1 in 4  for each of the four directions.

let p = [0.25, 0.25, 0.25, 0.25];
//probabilties correspond to right, left, down, up.

class Walker {
  constructor(mode = "aimless", probabilities = p) {
    //ensure probabilities has a length 4!
    this.x = width / 2;
    this.y = height / 2;
    this.mode = mode;
    this.probabilities = probabilities;

    //Telling the user about the default walker settings.
    if (!(mode == "aimless" || mode == "bias" || mode == "dynamic bias")) {
      console.log(
        "Walker will default to aimless mode since a mode was not provided. Options for modes: 'aimless', 'bias', or 'dynamic bias'."
      );
    }

    //Bias mode uses user provided probabilities.
    if (mode === "bias") {
      console.log("Walker probabilities:", probabilities);
    }

    console.log("Walker is in " + this.mode + " mode.");
  }

  //Displays the walker with a small black ellipse.
  show() {
    fill(0);
    ellipse(this.x, this.y, 1);
  }

  
  step() {
    let step = [1, 1, 1, 1];
    let choice = random(1);
    
    //Alters the probabilities of the walkers steps. If random is in range of probabilityOfMovingToMouse, the two directions to the mouse are set to a 50% chance to move towards the mouse.
    if (this.mode == "dynamic bias") {
      let probabilityOfMovingToMouse = 0.99;
      
      if(choice < probabilityOfMovingToMouse && choice > 0){
        //CreateProbabilityList takes which two directions the mouse is to the walker and creates a corresponding list, eg 1,3 equates to left and down (i think) which means the walker will have probs 0,0.5,0,0.5
        this.probabilities = createProbabilityList(getMouseDirection(this.x, this.y));
      }
    }
    
    
    let cumul_probs = convertToCumulativeProbs(this.probabilities);

    let stepDirection = returnProbabilityIndex(choice, cumul_probs);
    
    //Bad code
    if (stepDirection == 0) {
      this.x += step[0];
    } else if (stepDirection == 1) {
      this.x -= step[1];
    } else if (stepDirection == 2) {
      this.y += step[0];
    } else if (stepDirection == 3) {
      this.y -= step[1];
    }
    
    
  }
}
