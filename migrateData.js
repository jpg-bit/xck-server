const oldDb = require('./oldDatabaseConfig');

const newDb = require('./config/database');

oldDb.query('SELECT * FROM Users', (err, results) => {
  if (err) {
    console.error('Error fetching data from old database:', err);
    return;
  }

  results.forEach((user) => {
    newDb.query('INSERT INTO Users (name, email, password) VALUES (: , :, :)', [user.name, user.email, user.password], (err) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err){          return;
        }
      }
    })
  })
}

vars.console.log('Data migration complete.');
});
