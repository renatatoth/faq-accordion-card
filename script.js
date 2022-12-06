const questionBtn = document.querySelectorAll('.question-btn');
const answer = document.querySelectorAll('.answer');

const resetQuestionBoxes = () => {
    answer.forEach(ans => ans.classList.remove('open'));
    questionBtn.forEach(ans => ans.classList.remove('active'));
};

const showAnswer = (e) => {
    //resetQuestionBoxes();
    const currQuestion = e.target;
    const currAnswer = currQuestion.parentNode.lastElementChild;
    currAnswer.classList.toggle('open');
    currQuestion.classList.toggle('active');
};

questionBtn.forEach(question => question.addEventListener('click', showAnswer));
