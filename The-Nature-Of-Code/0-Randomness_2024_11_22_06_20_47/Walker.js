class Walker{
  constructor(){
    
    this.x = width/2
    this.y = height/2
  }
  
  show() {
    //strokeWeight(1)
    //fill(72, 247, 249)
    fill(0)
    ellipse(this.x, this.y, 1);
    
    //stroke(0)
    //point(this.x, this.y)
  }
  
    step() {
    //0, 1, 2, or 3. The random choice determines the step.
    let step = [1,1,1,1]
    //let x_step = 1;
    //let y_step = x_step;
    //let irregular_step = 1;
    let probs = [0.4, 0.2, 0.2, 0.2]
    let choice = random(1);
    
    if (choice >= 0 && choice <= probs[0]) {
      this.x += step[0];
    } else if (choice <= (probs[0] + probs[1]) ) {
      this.x -= step[1];
    } else if (choice <= (probs[0] + probs[1] + probs[2])) {
      this.y += step[2];
    } else if (choice <= 1){
      this.y -= step[3];
    } else{
      print("Error");
    }
  }
  
  
}