const {connection} = require('../db/db-connection');

const getAllInstruments = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM instrument", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewInstrument = (instrument) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO instrument VALUE(?,?,?,?)", [
        instrument.instrumentId,
        instrument.instrumentName,
        instrument.purchasedDate,
        instrument.categoryId
      ], (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

const updateStudent = (student) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE student SET name=?, gender=?, register_date=?, mobile_no=? WHERE student_id=?", [
      student.name,
      student.gender,
      student.registerDate,
      student.mobileNo,
      student.studentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeStudent = (student) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM student WHERE student_id=?", [
      student.studentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const getNextId = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT student_id FROM student ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("S" + ("000" + (parseInt(result[0].student_id.split("S")[1]) + 1)).slice(-3));
      } else {
        resolve("S001");
      }
    });
  });
};

module.exports = {
  getAllInstruments,
  addNewInstrument
};
