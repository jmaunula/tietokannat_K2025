const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('SELECT * FROM arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM arviointi WHERE idarviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'INSERT INTO arviointi (pvm, arvosana) VALUES(?,?)',
      [arviointi.pvm, arviointi.arvosana],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM arviointi WHERE idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'UPDATE arviointi SET pvm=?, arvosana=? WHERE idarviointi=?',
      [arviointi.pvm, arviointi.arvosana, id],
      callback
    );
  }
};

module.exports = arviointi;
