const correctAnswers = ["8", "10", "3", "25"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const message = document.querySelector(".message");

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

  if (score === 100) {
    message.innerHTML = ` <p class="message">
    <span id="percentage" class="text-danger display-4 p-3">${score}%</span>
    Doğru cevap oranı
  </p>
  <p class="text-danger fs-2 text">Bravo! Bir sonraki egzersiz grubuna geçebilirsin</p>`;
    document.querySelector(".btn").disabled = true;
  } else {
    message.innerHTML = ` <p class="message">
    <span id="percentage" class="text-danger display-4 p-3">${score}%</span>
    Doğru cevap oranı
  </p>`;
  }
});
