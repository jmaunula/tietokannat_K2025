const mysql = require('mysql2');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'jouni',
  password: 'jouni',
  database: 'netdb'
});
module.exports = connection;