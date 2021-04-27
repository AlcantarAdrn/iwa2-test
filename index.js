const http = require('http'), 
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
exphbs = require('express-handlebars'),
dotenv = require("dotenv");

var app = express();
let port = process.env.PORT || 8000; 
dotenv.config();


app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
})

const dbURI = process.env.DB_URL;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));