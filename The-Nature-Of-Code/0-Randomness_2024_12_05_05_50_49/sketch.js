//Up to exercise 0.3
//Up to: clean this code up!!!!



let walker;
let i = 0;

function setup() {
  createCanvas(400, 400);
  background(255,223,0);
  
  walker = new Walker("dynamic bias");
}

//The two questions that I’ll ask over and over again throughout this book: 
//How do you define the rules that govern the behavior of your objects?
//How do you implement these rules in code?

function draw() {
  /*if (i % 100 === 0){
    walker = new Walker();
  }*/
  
  /*
  if (random(1) < 0.01){
    print("Killed old walker.")
    print("Lasted", i, "frames!")
    walker = new Walker();
    print("say hi to new guy")
  }
  */
  
  walker.show();
  walker.step();
  i += 1

}