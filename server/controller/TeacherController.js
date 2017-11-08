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
      connection.query("INSERT INTO teacher VALUE(?,?,?)", [
        nextId,
        teacher.teacherName,
        teacher.contactNo,
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
    connection.query("UPDATE teacher SET name=?, contact_no=? WHERE teacher_id=?", [
      teacher.teacherName,
      teacher.contactNo,
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
