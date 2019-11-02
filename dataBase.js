const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "get_waiter"
}).then((c) => {
    db = c;
}).catch((e) => {
    console.error(e);
});

module.exports = function (req, res) {
    res.send(db.query("select * from users"));
}