const navBar = document.getElementById("nav-bar");
const categoryDropdown = document.createElement('select');
const typeDropdown = document.createElement('select');
const difficultyDropdown = document.createElement('select');
navBar.append(categoryDropdown, typeDropdown, difficultyDropdown);


function apiFetch(){
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}