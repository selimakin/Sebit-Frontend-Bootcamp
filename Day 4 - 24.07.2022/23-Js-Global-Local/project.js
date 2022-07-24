let age = 31;

if (true) {
  let age = 60;
  console.log("içerideki yaş", age);
  if (true) {
    let age = 50;
    console.log("içeridekinin içinde yaş", age);
  }
}

console.log("en dıştaki yaş", age);
