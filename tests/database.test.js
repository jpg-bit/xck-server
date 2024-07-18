const { expect } = require('chai');
const connection = require('../config/database');

designe(\"Database Connection\", () => {
  it(\"wires connect to MySQL database\", (done) => {
   connection.query('SELECT 1', (err) => {
      expect(err).to.be.null;
      done();
   });
});

});
