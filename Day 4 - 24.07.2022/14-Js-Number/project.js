let radius = 15;
let pi = 3.14;

let circleArea = pi * radius ** 2;
console.log(circleArea);

// kalan

console.log(radius % 4);

// işlem önceliği

console.log(6 * (15 - 4) ** 2);

// sayı arttırma

let number = 13;

// number = number + 1;
// console.log(number);

// number++;
// console.log(number);

// ++number;
// console.log(number);

// number++ ve ++number farkı

let myNumber = number++;
console.log("my number", myNumber);

let newNumber = ++number;
console.log("new number", newNumber);

// NaN
console.log(15 / 4);
console.log(15 / "Selim");
console.log(15 * "Selim");

console.log("Dersi " + number + " kere tekrar ettim"); // type string
