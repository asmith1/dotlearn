var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

/* DO WE NEED CORS? let's assume yes! */
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.header("Access-Control-Allow-Headers", "GET, PUT, POST, DELETE");
  next();
}); 

// Mongodb setup from Ming's example
var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/myDataBase';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
    db = databaseConnection;
});

app.post('/post.json', function(request, response) {
 // response.send("POST TEST");
  var requestBody = request.body;
    /*if (requestBody.username == "" || requestBody.username == null || requestBody.score == "" || requestBody.score == null || requestBody.grid == "" || requestBody.grid == null) {
        response.send(200);
        return;
    }*/

    console.log("reqeustBody was created");

    var toInsert = {
        "lat": requestBody.lat,
        "lng": requestBody.lng,
        "school": requestBody.school,
        "contact": requestBody.contact,
        "phone": requestBody.phone
    };

    console.log("toInsert was created");

    db.collection('dotlearn', function(error, coll) {
        if (error) {
            console.log("Error: " + error);
            res.send(500);
        } else {
            coll.insert(toInsert, function(error, saved) {
                console.log("Saved: "+ saved);
                if (error) {
                    console.log("Error: " + error);
                    res.send(500);
                } else {
                    res.send(200);
                }
            });
        }
    });
});

app.get('/', function(request, response) {
    response.send("GET TEST");
});

app.listen(app.get('port'));
