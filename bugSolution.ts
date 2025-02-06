function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5

//Corrected code: explicit type checking prevents runtime errors
let result3 = add(5, 3 as number); //Explicit type assertion. This will work fine. 
let result4 = subtract(10, 5 as number); //Explicit type assertion. This will work fine. 

//Alternative using a more robust solution
function addSafe(a: number, b: number): number {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  return a + b;
}

function subtractSafe(a: number, b: number): number {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  return a - b;
}
let result5 = addSafe(5, "3"); //Throws an error
let result6 = subtractSafe(10, "5"); //Throws an error