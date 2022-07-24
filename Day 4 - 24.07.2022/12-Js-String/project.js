let email = "selimakin55@gmail.com";
console.log(email);

// birleştirme

let name = "Selim";
let surname = "AKIN";

let fullName = name + " " + surname;
console.log(fullName);
console.log(fullName[0]);

// kaç karakter

console.log(fullName.length);

// string metodları
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// kaçıncı index

let index = fullName.indexOf("i");
let indexLast = fullName.lastIndexOf("i");
console.log(index);
console.log(indexLast);

// slice kullanımı

let firstName = fullName.slice(0, 5);
console.log(firstName);

// replace kullanımı

console.log("Yavuz Selim AKIN".replace(" ", ""));

// replaceAll kullanımı

console.log("Yavuz Selim AKIN".replaceAll(" ", ""));
