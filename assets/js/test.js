console.log("hello, text JS")

fetch("./assets/js/JSON/questions.json")
    .then(function (results){
        return results.json();
    })
    .then(function (data){
        appendData(data)
    })
    .catch(function (err){
        console.log("error: " + err)
    })
function appendData(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i].questions)
    }

}