const {connection} = require('../db/db-connection');

const getAllEnrollments = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT first_name, class_id, student_id from enrollment join student using (student_id)", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewEnrollment = (enrollment) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO enrollment VALUE(?,?)", [
      enrollment.studentId,
      enrollment.classId
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const updateEnrollment = (enrollment) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE enrollment SET class_id=? WHERE student_id=?", [
      enrollment.classId,
      enrollment.studentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeEnrollment = (enrollment) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM enrollment WHERE class_id=? and student_id=?", [
      enrollment.classId,
      enrollment.studentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};


module.exports = {
  getAllEnrollments,
  addNewEnrollment,
  updateEnrollment,
  removeEnrollment
};
