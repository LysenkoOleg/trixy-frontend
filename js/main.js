const optionsBtn = document.getElementById('options');
const optionsAnswer = document.querySelectorAll('.option-answers');
const optionsTitle = document.querySelectorAll('.option-title');

function changeBtn(el) {
    for(let i = 0; i < optionsBtn.children.length; i++) {
        optionsBtn.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

function changeOption(el) {
    for(let i = 0; i < optionsAnswer.length; i++) {
        optionsAnswer[i].classList.remove('active');
        if(optionsAnswer[i].dataset.option == el) {
            optionsAnswer[i].classList.add('active');
        }
    }
}

function changeTitle(el) {
    for(let i = 0; i < optionsTitle.length; i++) {
        optionsTitle[i].classList.remove('active')
        if(optionsTitle[i].dataset.title == el) {
            optionsTitle[i].classList.add('active');
        }
    }
}

optionsBtn.addEventListener('click', e => {
    const currBtn = e.target.dataset.btn;
    changeBtn(e.target);
    changeOption(currBtn);
    changeTitle(currBtn);
})

const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answers = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const question = document.getElementById('question');

const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

let indexOfQuestion = 0;

const questions = [
    {
        question: 'Для чего тебе нужны трусики?',
        options: [
            '<img class="ques-img blood" src="/image/blood.png" alt="blood"> Для месячных',
            '<img class="ques-img water" src="/image/water.png" alt="water"> При недержании',
            '<img class="ques-img mother" src="/image/mother.png" alt="mother"> Во время беременности'
        ]
    },
    {
        question: 'Как часто тебе приходится менять трусики?',
        options: [
            '<img class="ques-img mother" src="/image/mother.png" alt="mother"> Раз в день',
            '<img class="ques-img blood" src="/image/blood.png" alt="blood"> Несколько раз в день',
            '<img class="ques-img water" src="/image/water.png" alt="water"> Не выхожу из дома без запасных'
        ]
    },
    {
        question: 'Легко ли тебе подобрать удобные трусики?',
        options: [
            '<img class="ques-img water" src="/image/water.png" alt="water"> Да, легко',
            '<img class="ques-img mother" src="/image/mother.png" alt="mother"> Попадаются крайне редко',
            '<img class="ques-img blood" src="/image/blood.png" alt="blood"> Таких не бывает'
        ]
    }
];

function load() {
    question.innerHTML = questions[indexOfQuestion].question;
    answer1.innerHTML = questions[indexOfQuestion].options[0];
    answer2.innerHTML = questions[indexOfQuestion].options[1];
    answer3.innerHTML = questions[indexOfQuestion].options[2];

    indexOfQuestion++;
}

function changeQuiz() {
    quiz.children[0].classList.remove('active')
    quiz.children[1].classList.add('active');
}

window.addEventListener('load', () => {
    load();
})

btnNext.addEventListener('click', () => {
    if(indexOfQuestion == questions.length - 1) {
        changeQuiz();
    }
    load();
});

btnRestart.addEventListener('click', () => {
    indexOfQuestion = 0;
    quiz.children[1].classList.remove('active')
    quiz.children[0].classList.add('active');
})
