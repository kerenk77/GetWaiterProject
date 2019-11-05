
const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "sharing-site"
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});


function register(req, res) {

    let userName = req.body.userName;
    let fullName = req.body.fullName;
    let email = req.body.email;
    let passWord = req.body.passWord;
    let confirmPassword = req.body.confirmPassword;

    let users = getUsers();

    for (let u of users)

        if (userName === u.userName && passWord === u.passWord) {
            res.status(500);

            res.send('משתמש קיים!!');
        }
}
let user = {
    userName,
    fullName,
    passWord,
    email,
    confirmPassword
};

users.push(user);
res.send("נרשמת בהצלחה")



async function getUsers() {

    let promise = db.query("select * from users");
    let data = await promise;
    console.log(data);
    return data;
}

function login(req, res) {}