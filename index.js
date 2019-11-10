require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 80;
const registration = require("./public/registration.js");
//const dbModule = require("./dataBase.js");

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function (req, res) {
    res.render('./pages/home', {})
});

app.get('/contactus', function (req, res) {
    res.render('./pages/ContactUs', {})
});
app.get('/registration', function (req, res) {
    res.render('./pages/registration', {})
});
// app.get('/home', (req, res) => res.sendFile('./public/pages/home.html', {
//     root: __dirname
// }));

//app.get('/db', (req, res) => {
//  registration(req, res);
//});

app.post('/registration/register', (req, res) => {
    console.log(req.body)
    registration.register(req, res);
});
app.post('/registration/login', (req, res) => {
    registration.login(req, res);
});

app.listen(port, () => console.log('Example app listening on port ' + port));