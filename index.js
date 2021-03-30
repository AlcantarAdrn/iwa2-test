const http = require('http'), 
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));


// http
//   .createServer(function(req, res) {
//     res.write(characters.join("\n")); //display the list of users on the page

//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080


// let characters = [];

// (async function getNames(){
//   try{
//     const {data} = await axios.get(
//         "https://swapi.dev/api/people/"
//     );
//     characters = data.results.map(character => character.name);
//     console.log(characters);
//    } catch(error){
//     console.log(error)
//   }
// })();

// mongoose.connect('mongodb://localhost/test');

// mongoose.connection.on('error', (err) => { 
//     console.log('Mongodb Error: ', err); 
//     process.exit();
// });
// mongoose.connection.on('connected', () => { 
//     console.log('MongoDB is successfully connected');
// });

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
})

const dbURI = "mongodb://localhost/test";


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));