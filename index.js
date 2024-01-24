const btn = document.getElementById('btn');
const inputs = document.querySelectorAll('input');
const question = document.getElementById('question');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');
const Q_container = document.querySelector('.question-container');
const score = document.getElementById('score');

const start_btn = document.querySelector('.start-btn');
const main = document.getElementById('main');
const greet = document.getElementById('greet');

let i = 0;
let correctCount = 0;
let inputPicked = null;
btn.style.background = "rgb(0, 132, 255)";

async function getQuestions(){
    const response = await fetch("./questions.json")
    const questionList = await response.json()

    populateQuestions()
    btn.addEventListener('click',Next);
    start_btn.onclick = startQuiz;


function Next(){
    inputPicked = null
    // check if score element is hidden if not then hide it and reset everything
    reset()

    // check which choice the user made and if its null than do not go to the next question
    checkInputChosen()

//    check if choice is correct if yes increment correctCount

   if(questionList[i][inputPicked].isCorrect){
        correctCount++
   }

//    check for last question if yes do not increment i and show score
    isLastQuestion()
    
    // update current Question
    populateQuestions()
}



function populateQuestions(){
    question.textContent = questionList[i].question;
    labelA.textContent = `A) ${questionList[i].a.text}`;
    labelB.textContent = `B) ${questionList[i].b.text}`;
}

function reset(){
     
    if(!score.classList.contains("hide")){
        btn.textContent = "Next"
        score.classList.add('hide')
        Q_container.classList.add('question-container')
        Q_container.classList.remove("hide")
        btn.style.background = "rgb(0, 132, 255)"
        return
    }
}

function checkInputChosen(){
    inputs.forEach(inp=>{
        if(inp.checked){
            inputPicked = inp.id 
            inp.checked = false
        }
    })

   if(inputPicked == null){
       return
   }
}

function isLastQuestion(){
    if(i >= questionList.length-1){
        i = 0
        let total = questionList.length
        Q_container.classList.remove('question-container')
        Q_container.classList.add("hide");
        score.textContent = `Your total score is ${correctCount}/${total}`;
        score.classList.remove("hide")
        btn.textContent = "Retry"
        btn.style.background = "rgb(27, 252, 27)"
        correctCount = 0

    }
    else{
        i++
    }
}

function startQuiz(){
    main.classList.add('show')
    greet.classList.add('hide')
}

}

getQuestions()



