const questionBtn = document.querySelectorAll('.question-btn');
const answerBox = document.querySelectorAll('.answer');
let selectedQuestion;

const resetQuestionBoxes = () => {
    answerBox.forEach(ans => ans.classList.remove('open'));
    questionBtn.forEach(ans => ans.classList.remove('active'));
};

const showAnswer = (e) => {
    const currQuestion = e.target;
    const currAnswer = currQuestion.parentNode.lastElementChild;

    if (selectedQuestion !== currQuestion) {
        resetQuestionBoxes();
    }

    currQuestion.classList.toggle('active');
    currAnswer.classList.toggle('open');
    selectedQuestion = currQuestion;
};

questionBtn.forEach(question => question.addEventListener('click', showAnswer));
