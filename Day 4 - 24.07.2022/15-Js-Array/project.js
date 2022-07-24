let names = ["can", "rıdvan", "elif"];
// console.log(names[0]);

// names[1] = "osman";
// console.log(names);

let ages = [43, 5, 6, 30];
console.log(ages[3]);

let random = ["can", "boz", 10, 15];
console.log(random);

// dizimin eleman sayısı
console.log(random.length);

let dashed = names.join("-");
console.log(dashed);

let comma = names.join(", ");
console.log(comma);

let index = names.indexOf("elif");
console.log(index);

// concat metodu
let added = names.concat(["osman", "merve"]); //  (ana diziyi değiştirmiyor)
console.log(added);
console.log(names);

names.push("leyla"); //  (ana diziyi değiştiriyor)
console.log(names);

names.pop();
console.log(names); // (son elemanı siler)
