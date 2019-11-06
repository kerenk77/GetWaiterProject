const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});

module.exports = {
    register,
    // login
};

async function register(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;
    let users = await getUsers();




    for (let u of users) {
        if ((userName === u.userName) && (password === u.password)) {
            res.status(500);
            res.send('משתמש קיים')
        }
    }
    //let user = {
    //    userName,
    //    password
    //}
    await db.query("insert into users ( user_name, password) VALUES( ' " + userName + "','" + password + "')");
    // console.log(db.query("INSERT INTO users ( user_name, password) VALUES( " + userName + "," + password + ")"))

    res.send('you are in!!');
};

async function getUsers() {
    let promise = db.query("select * from users");
    let data = await promise;
    return data;
}

// function login(req, res) {
//     let userName = req.body.userName;
//     let password = req.body.password;
//     let users = await getUsers();

// for(let u of users){
//     if ((userName === u.userName) && (password === u.password)) {
//         res.status(300);
//         res.send('התחברת בהצחלה')
//     }

// }



//     res.send("gfddd")
// }