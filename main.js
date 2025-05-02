import { quizzes } from './quiz.js';

let userXP = 0;
const xpDisplay = document.getElementById('xpDisplay');
const quizContainer = document.getElementById('quizContainer');

const categories = {
  basic: 0,
  intermediate: 100,
  advanced: 300
};

function updateXP(amount) {
  userXP += amount;
  xpDisplay.textContent = `XP: ${userXP}`;
  updateButtonStates();
}

function updateButtonStates() {
  const intBtn = document.getElementById('intermediateBtn');
  const advBtn = document.getElementById('advancedBtn');

  if (userXP >= 100) {
    intBtn.classList.remove('locked');
    document.getElementById('intReq').style.display = 'none';
  }
  if (userXP >= 300) {
    advBtn.classList.remove('locked');
    document.getElementById('advReq').style.display = 'none';
  }
}

function loadQuestion(level) {
  const questions = quizzes[level];
  const q = questions[Math.floor(Math.random() * questions.length)];

  quizContainer.innerHTML = `
    <p>${q.question}</p>
    ${q.options.map((opt, i) => `<button class="button optionBtn" data-index="${i}">${opt}</button>`).join('')}
  `;

  document.querySelectorAll('.optionBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = parseInt(btn.getAttribute('data-index'));
      if (selected === q.correctIndex) {
        alert("Correct! +10 XP");
        updateXP(10);
      } else {
        alert("Wrong!");
      }
      loadQuestion(level); // Load next
    });
  });
}

document.getElementById('basicBtn').addEventListener('click', () => loadQuestion('basic'));
document.getElementById('intermediateBtn').addEventListener('click', () => {
  if (userXP >= 100) loadQuestion('intermediate');
});
document.getElementById('advancedBtn').addEventListener('click', () => {
  if (userXP >= 300) loadQuestion('advanced');
});

updateButtonStates();
