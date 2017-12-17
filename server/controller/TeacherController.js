const {connection} = require('../db/db-connection');

const getAllTeachers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM teacher", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewTeacher = (teacher) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO teacher VALUE(?,?,?,?,?,?)", [
        nextId,
        teacher.firstName,
        teacher.lastName,
        teacher.address1,
        teacher.address2,
        teacher.address3
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

const updateTeacher = (teacher) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE teacher SET first_name=?, last_name=?, address_line_1=?, address_line_2=?, address_line_3=? WHERE teacher_id=?", [
      teacher.firstName,
      teacher.lastName,
      teacher.address1,
      teacher.address2,
      teacher.address3,
      teacher.teacherId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeTeacher = (teacher) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM teacher WHERE teacher_id=?", [
      teacher.teacherId
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
    connection.query("SELECT teacher_id FROM teacher ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("T" + ("000" + (parseInt(result[0].teacher_id.split("T")[1]) + 1)).slice(-3));
      } else {
        resolve("T001");
      }
    });
  });
};

module.exports = {
  getAllTeachers,
  addNewTeacher,
  updateTeacher,
  removeTeacher
};
