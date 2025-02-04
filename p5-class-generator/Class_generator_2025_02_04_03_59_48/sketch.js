/*TO DO
array of text box's, plus button to generate more

class name

class attributes
name ---- type

extra methods


*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  /*
      console.log(strToSnakeCase("HelloWorld Test")); // "hello_world_test"
    console.log(isStringInList(["apple", ["banana", "cherry"]], "banana")); // true
    console.log(validStringList(["hello", "world", ""])); // false
    console.log(camelToSnake("helloWorld")); // "hello_world"
    */
  
  
  let classBlueprint = new ClassBlueprint(
    "Person",
    [["age", "int"], ["height", "float"], ["name", "str"]],
    ["grow", "change_name"]
  );

  let classCode = classBlueprint.generateClassCode();
  //console.log(classCode);

  //saveStrings([classCode], classBlueprint.camelname + ".py");
  
  input = createInput();
  input.position(20, 20);
  
  // Create the button
  button = createButton('Submit');
  button.position(20, 50);
  button.mousePressed(printInput);  // When the button is pressed, call the printInput function
  
}

function draw() {
  background(255, 223, 0);
  textAlign(CENTER);
  text('Class code Generator', width/2, height/8);
  //text(input.value(), 20, 100);
  
  // Function to print the value of the input box to the console

  
}

function printInput() {
  console.log(input.value());
}