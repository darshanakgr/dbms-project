const {connection} = require('../db/db-connection');

const getAllAttendanceRecords = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM attendance", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewAttendance = (attendance) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO attendance VALUE(?,?,?,?)", [
      attendance.studentId,
      attendance.classId,
      attendance.attendDate,
      attendance.absent_present
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const updateAttendance = (attendance) => {
  //console.log(attendance);
  return new Promise((resolve, reject) => {
    connection.query("UPDATE attendance SET is_present=? WHERE class_id=? and student_id=? and attend_date=?", [
      attendance.absent_present,
      attendance.classId,
      attendance.studentId,
      attendance.attendDate
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeAttendance = (attendance) => {
  return new Promise((resolve, reject) => {
    //console.log(attendance);
    connection.query("DELETE FROM attendance WHERE class_id=? and student_id=? and attend_date=?", [
      attendance.classId,
      attendance.studentId,
      attendance.attendDate
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};


module.exports = {
  getAllAttendanceRecords,
  addNewAttendance,
  updateAttendance,
  removeAttendance
};
