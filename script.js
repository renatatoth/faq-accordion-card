const questionBtn = document.querySelectorAll('.question-btn');
const answerBox = document.querySelectorAll('.answer');
const illustrationBox = document.querySelector('.illustration-box');
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

const moveBox = () => {
    illustrationBox.style.transform = 'translate(-67%, 94%)';
};

const resetBox = () => {
    illustrationBox.style.transform = 'translate(-47%, 94%)';
};

questionBtn.forEach(question => question.addEventListener('click', showAnswer));
questionBtn.forEach(question => question.addEventListener('mouseover', moveBox));
questionBtn.forEach(question => question.addEventListener('mouseout', resetBox));
