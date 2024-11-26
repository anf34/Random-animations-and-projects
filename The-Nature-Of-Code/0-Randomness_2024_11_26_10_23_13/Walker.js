class Walker {
  constructor(mode) {
    this.x = width / 2;
    this.y = height / 2;
    this.mode = mode
  }

  show() {
    //strokeWeight(1)
    //fill(72, 247, 249)
    fill(0);
    ellipse(this.x, this.y, 1);

    //stroke(0)
    //point(this.x, this.y)
  }

  step() {
    
    
    
    //0, 1, 2, or 3. The random choice determines the step.
    let step = [1, 1, 1, 1];
    //let x_step = 1;
    //let y_step = x_step;
    //let irregular_step = 1;
    let probs = [0.25, 0.25, 0.25, 0.25];
    let choice = random(1);

    if (choice < 0.5) {
      if (choice < 0.25) {
        if (mouseX - this.x > 0) {
          this.x += step[0];
        } else {
          this.x -= step[1];
        }
      } else {
        if (mouseY - this.y > 0) {
          this.y += step[2];
        } else {
          this.y -= step[3];
        }
      }
      choice = 10;
      //console.log("Closer to mouse!");
    } else {
      if (choice >= 0 && choice <= probs[0]) {
        this.x += step[0];
      } else if (choice <= probs[0] + probs[1]) {
        this.x -= step[1];
      } else if (choice <= probs[0] + probs[1] + probs[2]) {
        this.y += step[2];
      } else if (choice <= 1) {
        this.y -= step[3];
      } else {
        print("Error");
      }
      //console.log("Random step!");
    }
  }
}
