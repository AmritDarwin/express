const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: ''
});

module.exports = connection.promise();