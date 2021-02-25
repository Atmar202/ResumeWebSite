const express = require('express');
const ejs = require('ejs');
require('./models/mongodb');
const mainPage = require('./routes/main');
const adminPage = require('./routes/admin');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', ejs);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(mainPage);
app.use(adminPage);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000.');
});