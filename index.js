console.log("hello world");
fetch(`https://opentdb.com/api.php?amount=10`)
    .then((resp) => resp.json())
    .then((data) => console.log(data));