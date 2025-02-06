function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // 8
let result2 = subtract(10, 5); // 5

//Uncommon error: type assertion failure due to implicit any
let result3 = add(5, "3"); // This will compile but will throw an error at runtime
let result4 = subtract(10, "5"); // This will compile but will throw an error at runtime