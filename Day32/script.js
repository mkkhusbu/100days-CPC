const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RulesBox");
const Questions = document.querySelector(".Questions");
const ExitButton = document.querySelector(".Buttons .ExitButton");
const ContinueBtn = document.querySelector(".Buttons .ContinueButton");

MyBtn.onclick = () => {
    RulesBox.classList.add("activeInfo");
}
ExitButton.onclick = () => {
    RulesBox.classList.remove("activeInfo");
}
ContinueBtn.onclick = () => {
    RulesBox.classList.remove("activeInfo");
    Questions.classList.add("quizShow");
    ShowQuestion(Que_count);
}

let que_text = document.querySelector(".que_text");

function ShowQuestion(index) {
    let que_tag = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";
    que_text.innerHTML = que_tag;
    // ===MyOption  Class===
    let option_wraper = document.querySelector(".MyOptions");
    let options_list = '<div class ="Options"><span>' + questions[index].options[0] + '</span></div>' +
        '<div class ="Options"><span>' + questions[index].options[1] + '</span></div>' +
        '<div class ="Options"><span>' + questions[index].options[2] + '</span></div>' +
        '<div class ="Options"><span>' + questions[index].options[3] + '</span></div>';

    option_wraper.innerHTML = options_list;

    let total_question_Num = document.querySelector(".total_que");
    let total_question_Num_inner = "<p>" + questions[index].numb + " of 5 Questions </p>"
    total_question_Num.innerHTML = total_question_Num_inner;

    // === Option Checker 
    let Option = option_wraper.querySelectorAll(".Options");
    for (let i = 0; i < Option.length; i++) {
        Option[i].setAttribute("onclick", "optionSelected(this)");
    }

}
function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[Que_count].answer;
    let allOptions = option_wraper.children.length;
    if (userAns == correctAns) {
        answer.classList.add('correct');
        alert("Your Answer is Correct");
    } else {
        alert("Your Answer is Wrong")
        answer.classList.add('incorrect');
    }

    for (let i = 0; i < allOptions; i++) {
        option_wraper.children[i].classList.add("disabled");
    }
}

// ====Number Counter===
let Que_count = 0;
let nextBtn = document.querySelector(".nextBtn");
nextBtn.onclick = () => {
    if (Que_count < questions.length - 1) {
        Que_count++;
        ShowQuestion(Que_count);
    } else {
        alert("You Have Complete Your Task 😋")
    }
}

