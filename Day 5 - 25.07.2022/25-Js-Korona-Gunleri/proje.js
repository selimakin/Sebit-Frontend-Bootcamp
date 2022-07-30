// const showResultEl = document.querySelector(".d-none");
// // console.log(showResult);

// const pointEl = document.getElementById("percentage");
// // console.log(pointEl);

// const radioButtonsEl = document.querySelectorAll("input[type='radio']");
// // console.log(radioButtonsEl);

// const formEl = document.querySelector("form");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let yesses = 0;

//   for (let i = 0; i < 8; i++) {
//     if (radioButtonsEl[i].defaultValue === "E" && radioButtonsEl[i].checked) {
//       yesses++;
//     }
//   }

//   showResultEl.classList.remove("d-none");

//   pointEl.innerText = `${yesses * 25}%`;
// });

// Hocanın Yöntemi

const correctAnswers = ["E", "E", "E", "E"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  result.classList.remove("d-none");
  result.querySelector("#percentage").textContent = `${score}%`;
});
