let quizstart_Btn= document.querySelector(".MyBtn");
let RulesBox = document.querySelector(".RulesBox");
let ExitButton = document.querySelector(".Buttons .ExitButton");
let ContinueButton = document.querySelector(".Buttons .ContinueButton");
let Questions = document.querySelector(".Questions");
let question_title = document.querySelector(".que_text");
let question_option_wrapper = document.querySelector(".MyOptions");
let total_que = document.querySelector('.total_que');
let nextBtn = document.querySelector(".nextBtn");
let score =0;

quizstart_Btn.onclick = ()=>{
    RulesBox.classList.add('activeInfo');
}
ExitButton.onclick = ()=>{
    RulesBox.classList.remove('activeInfo');
}
ContinueButton.onclick = ()=>{
    RulesBox.classList.remove('activeInfo');
    Questions.classList.add("quizShow");
    questionShow(que_count);
    startTimer(timeValue);
    startTimerLine(widthValue)
}
let que_count=0;
function questionShow(index){
    let que_tag = "<span>" +questions[index].numb +". "+ questions[index].question + "</span>";
    question_title.innerHTML = que_tag;
    let option_list =`
            <div class = "Options">
                <span>${questions[index].options[0]}</span>
            </div>
            <div class = "Options">
                <span>${questions[index].options[1]}</span>
            </div>
            <div class = "Options">
                <span>${questions[index].options[2]}</span>
            </div>
            <div class = "Options">
                <span>${questions[index].options[3]}</span>
            </div>`;
            question_option_wrapper.innerHTML = option_list;
    total_que.innerHTML = `<p>${questions[index].numb} of ${questions.length} Questions</p>`;
    let Options = question_option_wrapper.querySelectorAll(".Options");
    for(let i=0;i<Options.length;i++){
        Options[i].setAttribute("onclick","OptionSelected(this)");
    }

}
let tickIcon = `<div class = "tickIcon"><i class = "fa-regular fa-circle-check"></i></div>`;
let crossIcon = `<div class="crossIcon"><i class="fa-solid fa-circle-xmark"></i></div>`;

function OptionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.innerText;
    let correctAns = questions[que_count].answer;
    let allOption = question_option_wrapper.children.length
    //console.log(answer)
    if(userAns == correctAns){
        clearInterval(counter);
        score+=1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);
    }else{
        clearInterval(timeValue)
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",crossIcon);
       
        for(let i = 0; i < allOption;i++){
            if(question_option_wrapper.children[i].innerText == correctAns){
                question_option_wrapper.children[i].setAttribute("class","Options correct");
                question_option_wrapper.children[i].insertAdjacentHTML("beforeend",tickIcon)
            }
        }
    }
    for(let i = 0;i <allOption;i++){
        question_option_wrapper.children[i].classList.add('disabled');
    }
    nextBtn.style.display ="block";
}

nextBtn.onclick = ()=>{
    nextBtn.style.display='none';
   if(que_count < questions.length -1 ) {
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue)
    que_count+=1;
    questionShow(que_count);
    }else{
        clearInterval(counter);
        clearInterval(counterLine)
        alert("complete ur task");
        showResult();
    }
}


let timeCount = document.querySelector(".Seconds");

let timeValue = 15;
let counter;

function startTimer(time){
    counter = setInterval(timer,900);

    function timer(){
        let addZero = timeCount.innerText = time;
        time--;
        if(time<9){
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.innerText = "00";
        }
    }
} 


let time_lines = document.querySelector(".Questions header .time_lines");
let counterLine;
let widthValue = 0;

function startTimerLine(timeLine){
    counterLine = setInterval(timeLiner,100);
    function timeLiner (){
        timeLine+= 2;
        time_lines.style.width = timeLine + 'px';
        if(timeLine >325){
            clearInterval(counterLine);
            // console.log("stop");
        }
        // console.log("running");
        
    }
}

let result_box = document.querySelector('.result_box');
let score_text = document.querySelector(".score_text");

function showResult(){
    result_box.classList.add("activeResult");
    Questions.classList.remove("quizShow");
let score_tag =` <span>Carry On👍 You Got <p>${score}</p> Out Of <p>5</p></span>`;
score_text.innerHTML=score_tag;

}
let restart = document.querySelector(".restart1");
let quit = document.querySelector(".quit");
quit.onclick= ()=>{
    window.location.reload();
}
restart.onclick = ()=>{
    que_count=0;
    score = 0;
    result_box.classList.remove("activeResult");
    Questions.classList.add('quizShow');
    questionShow(que_count)
}


// let MyBtn = document.querySelector(".MyBtn");
// let RulesBox = document.querySelector('.RulesBox');
// let ExitButton = document.querySelector(".Buttons .ExitButton");
// let ContinueButton = document.querySelector(".Buttons .ContinueButton");
// let Questions = document.querySelector('.Questions');
// let nextBtn = document.querySelector(".nextBtn");
// let que_text = document.querySelector('.que_text');
// let option_list = document.querySelector('.MyOptions')//option_list
// let total_que = document.querySelector(".total_que");
// let que_count = 0;


// MyBtn.onclick = () => {
//     RulesBox.classList.add('activeInfo');
// }
// ExitButton.onclick = () => {
//     RulesBox.classList.remove('activeInfo');
// }
// ContinueButton.onclick = () => {
//     RulesBox.classList.remove('activeInfo');
//     Questions.classList.add('quizShow');
//     showQuestion(que_count);

//     clearInterval(counter);
//     startTimer(timeValue);
//     startTimerLine(widthValue);
// }



// nextBtn.onclick = () => {
//     nextBtn.style.display = "none";

//     if (que_count < questions.length - 1) {
//         clearInterval(timeLine);
//         clearInterval(counterLine);
//         startTimerLine(widthValue)
//         startTimer(timeValue);

//         que_count++;
//         showQuestion(que_count);

//     } else {
//         clearInterval(counter);
//         alert("complete ur task");
//         showResult();
//     }


// }



// function showQuestion(index) {
//     //que_tag
//     let que_tag = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";
//     que_text.innerHTML = que_tag
//     let option_tag =
//         `<div class="Options">
//             <span>${questions[index].options[0]}</span>
//             </div>
//             <div class="Options">
//             <span>${questions[index].options[1]}</span>
//             </div>
//             <div class="Options">
//             <span>${questions[index].options[2]}</span>
//             </div>
//             <div class="Options">
//             <span>${questions[index].options[3]}</span>
//             </div> `;
//     option_list.innerHTML = option_tag;

//     let total_queTag = `<p>${questions[index].numb} of ${questions.length} Questions</p>`
//     total_que.innerHTML = total_queTag;

//     let option = option_list.querySelectorAll(".Options");

//     for (let i = 0; i < option.length; i++) {
//         option[i].setAttribute("onclick", "OptionSelected(this)")
//     }
// }

// let tickIcon = `<div class = "tickIcon"><i class = "fa-regular fa-circle-check"></i></div>`;
// let crossIcon = `<div class="crossIcon"><i class="fa-solid fa-circle-xmark"></i></div>`;


// function OptionSelected(answer) {
//     clearInterval(counter);
//     clearInterval(counterLine);

//     let userAns = answer.innerText;
//     let correctAns = questions[que_count].answer;
//     let allOption = option_list.children.length;

//     //  console.log(allOption)

//     if (userAns == correctAns) {
//         score += 1;
//         answer.classList.add('correct')
//         console.log('Correct');
//         answer.insertAdjacentHTML('beforeend', tickIcon);
        
//        // startTimerLine(widthValue)
//       //  startTimer(timeValue);
        

//     } else {
//         // clearInterval(timeLine);
//         // clearInterval(counterLine);
//         // startTimerLine(widthValue)
//         // startTimer(timeValue);
//         answer.classList.add('incorrect');
//         answer.insertAdjacentHTML("beforeend", crossIcon);
//         console.log('false')


//         for (let i = 0; i < allOption; i++) {
//             if (option_list.children[i].innerText == correctAns) {
//                 option_list.children[i].setAttribute('class', 'Options correct');
//                 option_list.children[i].insertAdjacentHTML('beforeend', tickIcon);
//             }
//         }
//     }


//     for (let i = 0; i < allOption; i++) {
//         option_list.children[i].classList.add('disabled');
//     }

//     nextBtn.style.display = "block";

// }
// let counter;
// let timeValue = 15;
// let timeCount = document.querySelector(".Seconds");

// function startTimer(time) {
//     counter = setInterval(Timer, 900);

//     function Timer() {
//         let addZero = timeCount.textContent = time;
//         time--;
//         if (time < 9) {
//             timeCount.textContent = 0 + addZero;
//         }
//         if (time < 0) {
//             clearInterval(Timer);
//             timeCount.textContent = "00";


//             // let allOption = option_list.children.length;

//             // for (let i = 0; i < allOption; i++) {
//             //     option_list.children[i].classList.add('disabled');
//             // }
        
//         }
//     }
// }

// let timeLine = document.querySelector(".QuestionsHeader .time_lines");
// let counterLine;
// let widthValue = 0;    
// function startTimerLine(time){
//     counterLine = setInterval(timer,45);
//     function timer(){
//         time += 1;
//         timeLine.style.width = time + "px";
//         if(time > 325){
//             clearInterval(counterLine);
//         }
//     }
// }

// let result_box = document.querySelector(".result_box");

// let score = 0;
// let score_text = document.querySelector('.score_text p')


// function showResult(){
//     RulesBox.classList.remove("activeInfo"); 
//     Questions.classList.remove("quizShow"); 
//     result_box.classList.add("activeResult");
//     score_text.innerText = score;

// }
// let replay = document.querySelector('.restart1');
// let quit_quiz= document.querySelector('.quit');
// replay.onclick = ()=>{
//     que_count = 0;
//     score = 0;
//   //  window.location.reload();
//     result_box.classList.remove('activeResult');
//     Questions.classList.add('quizShow');
//     showQuestion(que_count);
    

// }
// quit_quiz.onclick = ()=>{
//     window.location.reload();
// }