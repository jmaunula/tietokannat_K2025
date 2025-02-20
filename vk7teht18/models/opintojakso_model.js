const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('SELECT * FROM opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM opintojakso WHERE idopintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'INSERT INTO opintojakso (koodi, laajuus, nimi) VALUES(?,?,?)',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM opintojakso WHERE idopintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'UPDATE opintojakso SET koodi=?, laajuus=?, nimi=? WHERE idopintojakso=?',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id],
      callback
    );
  }
};

module.exports = opintojakso;
