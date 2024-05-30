


let object = {
    amount: 10,
    category: 9,
    difficulty: "easy",
    type: "boolean"
}
let string = `https://opentdb.com/api.php?amount=${object.amount}${object.category ? "&category=" + object.category : ""}${object.difficulty ? "&difficulty=" + object.difficulty : ""}${object.type ? "&type=" + object.type : ""}`;

function apiFetch(urlObject){
    
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}