let x1 = 3;
let x2 = 7;
let y1 = 5;
let y2 = 10;

let newX = x1 - x2;
let newY = y1 - y2;

let distance = Math.sqrt(newX*newX + newY*newY);

console.log("The distance between (" + x1 + ", " + x2 + ") and (" + y1 + ", " + y2 + ") is " + distance + ".");