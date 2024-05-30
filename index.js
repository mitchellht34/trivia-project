
document.addEventListener("DOMContentLoaded", () => {
    
    const numQuestions = document.getElementById("num-questions");
    const category = document.getElementById("category");
    const type = document.getElementById("type");
    const difficulty = document.getElementById("difficulty");
    const form = document.querySelector("form");
    const questions = document.getElementById("questions");
    const questionHeader = document.createElement('h2');
    questionHeader.innerText = "Questions";

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const numQuestions = document.getElementById("num-questions");
        const category = document.getElementById("category");
        const type = document.getElementById("type");
        const difficulty = document.getElementById("difficulty");

        const urlObject = {
            amount: numQuestions.value,
            category: category.value,
            difficulty: difficulty.value,
            type: type.value
        }

        const url = `https://opentdb.com/api.php?amount=${urlObject.amount}${urlObject.category ? "&category=" + urlObject.category : ""}${urlObject.difficulty ? "&difficulty=" + urlObject.difficulty : ""}${urlObject.type ? "&type=" + urlObject.type : ""}`;
        apiFetch(url);
        
        numQuestions.value = '10';
        category.value = '';
        type.value = '';
        difficulty.value = '';

        questions.innerHTML = '';
        questions.append(questionHeader);

    })
})

function apiFetch(url){
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        data.results.forEach((element) => appendQuestion(element));
    });
}

function appendQuestion(element){
    const display = document.getElementById("questions");
    const question = document.createElement("li");
    question.innerText = element.question;
    display.append(question)

    console.log(element);
    const answers = element.type === 'multiple' ? [element.correct_answer, ...element.incorrect_answers] : ["True", "False"];
    const answerChoices = document.createElement('ul');
    question.append(answerChoices);
    answers.forEach((answer) => {
        const option = document.createElement('li');
        option.innerText = answer;
        answerChoices.appendChild(option);
    })
}