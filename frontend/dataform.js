var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';


function sendData()
{
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    //newUsername = window.prompt("Please enter your username", "username");
    $.post( "https://sleepy-depths-86014.herokuapp.com/submit.json", {"lat":lat, "lng": lng},function(result) { 
    });
}