const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 80;
const registration = require("./registration.js");

app.set('view engine', 'ejs');
app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.render('./user', {
        id: req.params.id,
        data: ['sara', 'index', 'xx', ]
    });
})

app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => res.sendFile('./public/pages/home.html', {
    root: __dirname
}));
app.get('/registration', (req, res) => res.sendFile('./public/pages/Registration.html', {
    root: __dirname
}));
app.get('/contactus', (req, res) => res.sendFile('./public/pages/ContactUs.html', {
    root: __dirname
}));
app.get('/home', (req, res) => res.sendFile('./public/pages/home.html', {
    root: __dirname
}));

app.post('/registration/register', (req, res) => {
    console.log('sghsth');
    return registration.register(req, res);
});
app.post('/registration/login', (req, res) => {
    return registration.login(req, res);
});

app.listen(port, () => console.log('Example app listening on port ' + port));