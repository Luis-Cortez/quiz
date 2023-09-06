const btn = document.getElementById('btn');
const inputs = document.querySelectorAll('input');
const question = document.getElementById('question');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');
const Q_container = document.getElementById('question-container');
const score = document.getElementById('score');
let i = 0;
let correctCount = 0;

let questionList = [

    {
        question:"what's 1+1",
        a: {
            text:"2",
            isCorrect: true,
        },
        b: {
            text:"1",
            isCorrect: false,
        }
    },

    {
        question:"what's 2+2",
        a: {
            text:"5",
            isCorrect: false,
        },
        b: {
            text:"4",
            isCorrect: true,
        }
    }
];

function populateQuestions(){
    question.textContent = questionList[i].question;
    labelA.textContent = questionList[i].a.text;
    labelB.textContent = questionList[i].b.text;
}


populateQuestions()



function check(){
    let inputPicked = null;

    if(score.classList.contains("show")){
        btn.textContent = "Next"
        score.classList.remove('show')
        score.classList.add('hide')
        Q_container.classList.remove("hide")
        return
    }

    inputs.forEach(inp=>{
        if(inp.checked){
            inputPicked = inp.id 
        }
    })

   if(inputPicked == null){
       return
   }

   if(questionList[i][inputPicked].isCorrect){
        correctCount++
   }

   if(i >= questionList.length-1){
        i = 0
        let total = questionList.length
        Q_container.classList.add('hide');
        score.textContent = `Your total score was ${correctCount}/${total}`;
        score.classList.remove('hide')
        score.classList.add('show')
        btn.textContent = "Restart"
        correctCount = 0
    }
    else{
        i++
    }
    populateQuestions()
}

btn.addEventListener('click',check)