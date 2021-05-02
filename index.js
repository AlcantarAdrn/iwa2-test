const http = require('http'), 
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
ejs = require('ejs'),
dotenv = require("dotenv");
var Record = require('./models/record');

const {check, validationResult} = require('express-validator');

const app = express();
let port = process.env.PORT || 8000; 
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));


app.set('view engine', 'ejs');  

app.get('/home', (req, res) => {
    res.render('index', 
    {owner: "adrian",
    title: "index"},  
    )
})

app.listen(port, function(err){
    console.log('Listening on port:' +port);
});

const dbURI = process.env.DB_URL;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.info('connected to db' ))
        .catch((err) => console.log(err));