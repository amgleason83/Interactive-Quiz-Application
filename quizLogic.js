document.addEventListener("DOMContentLoaded", () => {

  // index page logic
  const subjectCards = document.querySelectorAll('.card');
  if (subjectCards.length > 0) {
    subjectCards.forEach(card => {
      card.addEventListener('click', () => {
        const subject = card.textContent.trim();
        window.location.href = `quiz.html?subject=${encodeURIComponent(subject)}`;
      });
    });
  }

  // quiz page logic
  const quizPage = document.querySelector('.quiz-container');
  if (quizPage) {

    let subject = "";
    let questions = [];
    let currentIndex = 0;
    let score = 0;

    // load subject from URL
    const params = new URLSearchParams(window.location.search);
    subject = params.get('subject');

    // set quiz title
    const quizTitle = document.getElementById('quiz-title');
    if (quizTitle && subject) {
      quizTitle.textContent = `${subject} Quiz`;
    }

    // load correct subject questions
    if (typeof Questions !== "undefined" && Questions[subject]) {
      questions = Questions[subject];
    } else {
      console.error("Subject not found or empty:", subject);
    }

    const qText = document.getElementById("question-text");
    const optionButtons = document.querySelectorAll(".option");
    const progress = document.getElementById("progress");
    const nextBtn = document.getElementById("next-btn");

    // option selection logic
    optionButtons.forEach(option => {
      option.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        option.classList.add('selected');
      });
    });

    // load a question
    function loadQuestion(index) {
      const q = questions[index];

      qText.textContent = q.question;

      optionButtons.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.classList.remove("selected");
      });

      progress.textContent = `Question ${index + 1} of ${questions.length}`;
    }

    // load first question
    if (questions.length > 0) {
      loadQuestion(currentIndex);
    }

    // next button handling
    nextBtn.addEventListener("click", () => {

      // find selected option
      let selected = document.querySelector(".option.selected");
      if (!selected) return; // don't move unless an option is picked

      let userAnswer = selected.textContent.trim();
      let correctAnswer = questions[currentIndex].answer;

      // scoring
      if (userAnswer === correctAnswer) {
        score++;
      }

      currentIndex++;

      if (currentIndex < questions.length) {
        loadQuestion(currentIndex);
      } else {
        // end of quiz
        localStorage.setItem("latestScore", score);
        window.location.href = "results.html";
      }

    });

  } 

}); 
