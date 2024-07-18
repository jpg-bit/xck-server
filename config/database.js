const mysql = require('msql2');

const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database_name'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:',
        err);
     return;
  }
    console.log('Connected to MySQL');
});

module.exports = connection;
