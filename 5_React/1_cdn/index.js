import calculator from "./calculator.js";
import loadsh from "loadsh";
console.log(calculator.a, calculator.plus());
const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = loadsh.uniqBy(arr);

console.log(unique);
