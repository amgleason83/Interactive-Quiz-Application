

document.addEventListener("DOMContentLoaded", () => {
//index page logic
   const subjectCards = document.querySelectorAll('.card');
  if (subjectCards.length > 0) {
    subjectCards.forEach(card => {
      card.addEventListener('click', () => {
        // Get subject text (e.g., "Math")
        const subject = card.textContent.trim();
        // Redirect with subject in URL
        window.location.href = `quiz.html?subject=${encodeURIComponent(subject)}`;
      });
    });
  }

  // --- QUIZ PAGE LOGIC ---
  const quizOptions = document.querySelectorAll('.option');
  if (quizOptions.length > 0) {
    quizOptions.forEach(option => {
      option.addEventListener('click', () => {
        // Clear previous selection
        quizOptions.forEach(btn => btn.classList.remove('selected'));

        // Highlight current selection
        option.classList.add('selected');
      });
    });
  }

 const quizTitle = document.getElementById('quiz-title');
if (quizTitle) {
  const params = new URLSearchParams(window.location.search);
  const subject = params.get('subject');
  if (subject) {
    quizTitle.textContent = `${subject} Quiz`;
  }
}





});

