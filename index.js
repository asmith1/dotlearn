var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

/* DO WE NEED CORS?
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/


app.post('/post', function(request, response) {
  response.send("POST TEST");
});

app.get('/get', function(request, response) {
    response.send("GET TEST");
});

app.listen(app.get('port'));
