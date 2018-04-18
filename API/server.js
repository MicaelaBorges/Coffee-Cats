const express        = require('express');
const cors = require('cors'); 
const url = 'https://cors.io/?https://api.webuntis.dk/api/status';
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             =require('./config/db');

const app            = express();

const port = 8000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log('We are live on ' + port);
    })
});