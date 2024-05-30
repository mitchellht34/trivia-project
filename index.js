
document.addEventListener("DOMContentLoaded", () => {
    
    const numQuestions = document.getElementById("num-questions");
    const category = document.getElementById("category");
    const type = document.getElementById("type");
    const difficulty = document.getElementById("difficulty");
    const form = document.querySelector("form");

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
    })
})

function apiFetch(url){
    
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.results);
    });
}