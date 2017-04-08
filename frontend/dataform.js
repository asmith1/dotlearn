function sendData(score, grid)
{
    newUsername = window.prompt("Please enter your username", "username");
    $.post( "https://sleepy-depths-86014.herokuapp.com/submit.json", {"username":newUsername, "score": score, "grid":JSON.stringify(grid)},function(result) { 
    });
}