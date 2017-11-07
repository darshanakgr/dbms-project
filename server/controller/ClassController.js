const {connection} = require('../db/db-connection');

const getAllClasses = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM class", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewClass = (mClass) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO instrument VALUE(?,?,?,?,?,?,?,?)", [
        nextId,
        mClass.classYear,
        mClass.classTime,
        mClass.classType,
        mClass.classDay,
        mClass.classroomId,
        mClass.lessonId,
        mClass.teacherId
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

const updateClass = (mClass) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE class SET class_year=?, class_time=?, class_type=?, class_day=?, class_room_id=?, lesson_id=?, teacher_id=? WHERE class_id=?", [
      mClass.classYear,
      mClass.classTime,
      mClass.classType,
      mClass.classDay,
      mClass.classroomId,
      mClass.lessonId,
      mClass.teacherId,
      mClass.classId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeClass = (mClass) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM class WHERE class_id=?", [
      mClass.classId
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
    connection.query("SELECT class_id FROM class ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("CL" + ("000" + (parseInt(result[0].instrument_id.split("CL")[1]) + 1)).slice(-3));
      } else {
        resolve("CL001");
      }
    });
  });
};

module.exports = {
  getAllClasses,
  addNewClass,
  updateClass,
  removeClass
};
