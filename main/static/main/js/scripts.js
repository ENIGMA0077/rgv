const detailButtons = document.querySelectorAll('.card-toggle');
detailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.religion-card');
    const details = card.querySelector('.card-details');
    const expanded = card.classList.toggle('is-open');

    if (details) {
      details.hidden = !expanded;
    }

    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Скрыть' : 'Подробнее';
  });
});

const updateMouseGlow = (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.body.style.setProperty('--mouse-x', `${x}%`);
  document.body.style.setProperty('--mouse-y', `${y}%`);
};

document.addEventListener('pointermove', updateMouseGlow);

const quizForm = document.querySelector('[data-quiz]');
if (quizForm) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const questions = [...quizForm.querySelectorAll('.quiz-question')];
    let correctCount = 0;

    questions.forEach((question) => {
      const correctIndex = Number(question.dataset.correct);
      const inputs = [...question.querySelectorAll('input[type="radio"]')];
      const selected = question.querySelector('input[type="radio"]:checked');
      question.classList.remove('is-correct', 'is-wrong');

      inputs.forEach((input) => {
        input.closest('label').style.border = 'none';
      });

      if (!selected) {
        question.classList.add('is-wrong');
        return;
      }

      const selectedIndex = inputs.indexOf(selected);
      if (selectedIndex === correctIndex) {
        correctCount += 1;
        question.classList.add('is-correct');
      } else {
        question.classList.add('is-wrong');
      }
    });

    const total = questions.length;
    const percent = Math.round((correctCount / total) * 100);
    const resultBox = document.getElementById('quiz-result');
    if (resultBox) {
      resultBox.innerHTML = `Ваш результат: ${correctCount} / ${total}<br>${percent}%<br>Правильных ответов: ${correctCount}<br>Ошибок: ${total - correctCount}`;
    }
  });
}

const crosswordCheckButton = document.getElementById('crossword-check');
if (crosswordCheckButton) {
  crosswordCheckButton.addEventListener('click', () => {
    const items = [...document.querySelectorAll('.crossword-item')];
    let correctAnswers = 0;

    items.forEach((item) => {
      const input = item.querySelector('input');
      const answer = (input.value || '').trim().toLowerCase();
      const expected = item.dataset.answer.trim().toLowerCase();

      item.classList.remove('is-correct', 'is-wrong');

      if (answer === expected) {
        item.classList.add('is-correct');
        correctAnswers += 1;
      } else {
        item.classList.add('is-wrong');
      }
    });

    const resultBox = document.getElementById('crossword-result');
    if (resultBox) {
      resultBox.innerHTML = `Правильных: ${correctAnswers} из ${items.length}`;
    }
  });
}
