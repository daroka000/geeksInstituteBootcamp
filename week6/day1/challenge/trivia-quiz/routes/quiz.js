const express = require('express');
const router = express.Router();
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];
// Variables pour stocker la progression du quiz
let currentQuestionIndex = 0;
let score = 0;
// GET /quiz - Affiche la première ou prochaine question
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "🎉 Quiz terminé !", score });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex].question;
  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: currentQuestion
  });
});

// POST /quiz - Soumettre une réponse
router.post('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz terminé !", score });
  }

  const userAnswer = req.body.answer?.trim().toLowerCase();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  let feedback = '';
  if (userAnswer === correctAnswer) {
    score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Incorrect. The correct answer was "${triviaQuestions[currentQuestionIndex].answer}".`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  } else {
    res.json({
      feedback,
      message: "Quiz terminé !",
      finalScore: score
    });
  }
});

// GET /quiz/score -Voir le score final
router.get('/score', (req, res) => {
  res.json({ score });
});

module.exports = router;
