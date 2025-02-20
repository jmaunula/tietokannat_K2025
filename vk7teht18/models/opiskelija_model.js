const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('SELECT * FROM opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('SELECT * FROM opiskelija WHERE idopiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'INSERT INTO opiskelija (etunimi, sukunimi, osoite, luokkatunnus) VALUES(?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('DELETE FROM opiskelija WHERE idopiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'UPDATE opiskelija SET etunimi=?, sukunimi=?, osoite=?, luokkatunnus=? WHERE idopiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id],
      callback
    );
  }
};

module.exports = opiskelija;
