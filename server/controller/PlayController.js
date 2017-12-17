const {connection} = require('../db/db-connection');

const getAllPlays = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT first_name, instrument_name, student_id, instrument_id FROM `play` natural join student natural join instrument", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewPlay = (play) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO play VALUE(?,?)", [
      play.studentId,
      play.instrumentId
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const updatePlay = (play) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE play SET instrument_id=? WHERE (student_id=?)", [
      play.instrumentId,
      play.studentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removePlay = (play) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM play WHERE (student_id=? and instrument_id=?)", [
      play.studentId,
      play.instrumentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

/* const getNextId = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT instrument_id FROM instrument ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("I" + ("000" + (parseInt(result[0].instrument_id.split("I")[1]) + 1)).slice(-3));
      } else {
        resolve("I001");
      }
    });
  });
}; */

module.exports = {
  getAllPlays,
  addNewPlay,
  updatePlay,
  removePlay
};
