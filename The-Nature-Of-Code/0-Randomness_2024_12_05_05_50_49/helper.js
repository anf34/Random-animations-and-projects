function convertToCumulativeProbs(probs) {
  //Tests:
  {
    if (probs === null) {
      throw new Error("The probability list cannot be null or empty.");
    }
    if (probs.length === 0) {
      throw new Error("The probability list cannot be null or empty.");
    }

    if (!Array.isArray(probs)) {
      throw new TypeError("The input must be an array.");
    }

    // Check if all elements are numbers and non-negative
    for (let prob of probs) {
      if (typeof prob !== "number") {
        // Check if it's a number
        throw new TypeError(
          "All elements in the probability list must be numbers."
        );
      }
      if (prob < 0) {
        throw new Error("Probabilities cannot be negative.");
      }
    }
  }

  let cumul_probs = [];
  cumul_probs[0] = probs[0];
  for (let i = 1; i < probs.length; i++) {
    cumul_probs[i] = probs[i] + cumul_probs[i - 1];
  }
  
  //More tests:
  {
    if (probs.length != cumul_probs.length) {
      throw new Error("The two lists must be equal in length.");
    }
  }
  return cumul_probs;
}


//Make a function so that given a list of probabilites, it randomly selects one of the four indexes based on the probabilities provided.

function returnProbabilityIndex(randomNumber, cumul_probs){
  
  //Tests:
  {
    if (randomNumber > 1 || randomNumber < 0) {
      throw new Error("The random number must be between 0 and 1.");
    }
  }
  // Loop through the cumulative probabilities
  for (let i = 0; i < cumul_probs.length; i++) {
    // Check if the random number falls under the current cumulative probability
    if (randomNumber <= cumul_probs[i]) {
      return i;
    }
  }
  // If the random number is larger than all cumulative probabilities, return -1 (error)
  return -1;
  
}

function getMouseDirection(x, y){
  //Bad code
  let directions = [];
  if (mouseX - x > 0){
    directions[0] = 0;
  }
  else{
    directions[0] = 1;
  }
  
  if (mouseY - y > 0){
    directions[1] = 2;
  }
  else{
    directions[1] = 3;
  }
  return directions;
  //End of bad code
  
  
}

//More bad code
function createProbabilityList(indices) {
  // Initialise a list of 4 zeros
  let result = [0, 0, 0, 0];

  // Loop through the indices and set corresponding values to 0.5
  for (let index of indices) {
    if (index >= 0 && index < 4) {  // Make sure index is valid (within bounds)
      result[index] = 0.5;
    } else {
      throw new Error("Index out of bounds. Must be between 0 and 3.");
    }
  }

  return result;
}
