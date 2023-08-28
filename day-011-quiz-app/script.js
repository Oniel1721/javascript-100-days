const SELECTORS = {
  choices: 'input[type="radio"]',
  question: ".question",
  timer: ".timer",
  count: ".count",
  quizContainer: "form",
  main: "main",
};

const $choices = document.querySelectorAll(SELECTORS.choices);
const $question = document.querySelector(SELECTORS.question);
const $timer = document.querySelector(SELECTORS.timer);
const $count = document.querySelector(SELECTORS.count);
const $quizContainer = document.querySelector(SELECTORS.quizContainer);
const $main = document.querySelector(SELECTORS.main);

const questions = [
  {
    title: "What is the capital of France?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    title: "What is the capital of Spain?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "Madrid",
  },
  {
    title: "What is the capital of Italy?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "Rome",
  },
  {
    title: "What is the capital of England?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "London",
  },
  {
    title: "What is the capital of Germany?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "Berlin",
  },
];

const renderQuestion = (question) => {
  $quizContainer.innerHTML = `<h3 class="question">${question.title}</h3>
    <hr>
    <ul>
        ${question.choices
          .map(
            (choice, index) => `
            <li>
                <input type="radio" name="answer" id="answer${index}" value="${choice}">
                <label for="answer${index}">${choice}</label>
            </li>
            `
          )
          .join("\n")}
    </ul>`;
};

const renderCount = (count) => {
  $count.textContent = `Question ${count} of ${questions.length}`;
};

const renderTimer = (minutes, second) => {
  $timer.textContent = `Time: ${
    minutes.length === 1 ? `0${minutes}` : minutes
  }:${second.length === 1 ? `0${second}` : second}`;
};

const renderScore = (score) => {
  $main.innerHTML = `
    <header>
      <h1>Quiz App</h1>
    </header>
    <h3 class="score">Your scored: ${score} of ${questions.length}</h3>
    <button onclick="location.reload()">Try Quiz Again</button>
  `;
};

let interval = null;

const startTimer = () => {
  let minutes = 10;
  let second = 0;
  interval = setInterval(() => {
    if (second === 0) {
      minutes--;
      second = 59;
    } else {
      second--;
    }
    renderTimer(String(minutes), String(second));
    if (minutes === 0 && second === 0) {
      clearInterval(interval);
      renderScore(0);
    }
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  let count = 1;
  renderCount(count);
  renderQuestion(questions[count - 1]);
  startTimer();
  const userAnswers = [];
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(SELECTORS.choices)) {
      userAnswers.push(target.value);
      count++;
      if (count > questions.length) {
        let score = 0;
        userAnswers.forEach((userAnswer, index) =>
          questions[index].answer === userAnswer ? score++ : null
        );
        renderScore(score);
        return;
      }
      renderCount(count);
      renderQuestion(questions[count - 1]);
    }
  });
});
