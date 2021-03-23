const http = require('http'), 
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app =express();
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


let characters = [];

(async function getNames(){
  try{
    const {data} = await axios.get(
        "https://swapi.dev/api/people/"
    );
    characters = data.results.map(character => character.name);
    console.log(characters);
   } catch(error){
    console.log(error)
  }
})();

app.listen(port, function(err){

    console.log('Listening on port:' + port);


});