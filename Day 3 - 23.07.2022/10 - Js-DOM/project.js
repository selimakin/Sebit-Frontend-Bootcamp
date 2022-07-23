// const button = document.querySelector("button");
// const button = document.querySelector("#buttonId");
// const button = document.querySelector(".buttonClass");
const button = document.getElementById("buttonId");
// const button = document.getElementsByClassName("buttonClass")[0];

// İlk yöntem
// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

// İkinci yöntem
const add = () => {
  console.log("Clicked");
};

console.log(button);

const liElements = document.querySelectorAll("li");
console.log(liElements);

// liElements.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.style.color = "blue";
//   });
// });

const ulEl = document.querySelector("ul");
console.log(ulEl);

// ulEl.remove();

// liElements.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

const li = document.createElement("li");
li.textContent = "JavaScript";

// append => sona eleman ekler
// prepend => başa eleman ekler

// button.addEventListener("click", () => {
//   ulEl.append(li);
// });

button.addEventListener("click", () => {
  ulEl.prepend(li);
});
