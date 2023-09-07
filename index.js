const btn = document.getElementById('btn');
const inputs = document.querySelectorAll('input');
const question = document.getElementById('question');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');
const Q_container = document.getElementById('question-container');
const score = document.getElementById('score');
let i = 0;
let correctCount = 0;
btn.style.background = "rgb(0, 132, 255)"

let questionList = [

    {
        question:"What is 1+1?",
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
        question:"What is 44x44?",
        a: {
            text: 44*44+2,
            isCorrect: false,
        },
        b: {
            text:44*44,
            isCorrect: true,
        }
    },

    {
        question:"What is 22x22?",
        a: {
            text:22*22+4,
            isCorrect: false,
        },
        b: {
            text: 22*22,
            isCorrect: true,
        }
    }
];

function populateQuestions(){
    question.textContent = questionList[i].question;
    labelA.textContent = `A) ${questionList[i].a.text}`;
    labelB.textContent = `B) ${questionList[i].b.text}`;
}


populateQuestions()



function check(){
    let inputPicked = null;

    if(!score.classList.contains("hide")){
        btn.textContent = "Next"
        score.classList.add('hide')
        Q_container.classList.add('question-container')
        Q_container.classList.remove("hide")
        btn.style.background = "rgb(0, 132, 255)"
        return
    }

    inputs.forEach(inp=>{
        if(inp.checked){
            inputPicked = inp.id 
            inp.checked = false
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
    populateQuestions()
}

btn.addEventListener('click',check);