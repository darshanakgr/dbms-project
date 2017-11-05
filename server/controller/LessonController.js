const {connection} = require('../db/db-connection');

const getAllLessons = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM lesson", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewLesson = (lesson) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO lesson VALUE(?,?)", [
        nextId,
        lesson.lessonName
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

const updateLesson = (lesson) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE lesson SET lesson_name=? WHERE lesson_id=?", [
      lesson.lessonName,
      lesson.lessonId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeLesson = (lesson) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM lesson WHERE lesson_id=?", [
      lesson.lessonId
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
    connection.query("SELECT lesson_id FROM lesson ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("L" + ("000" + (parseInt(result[0].lesson_id.split("L")[1]) + 1)).slice(-3));
      } else {
        resolve("L001");
      }
    });
  });
};

module.exports = {
  getAllLessons,
  addNewLesson,
  updateLesson,
  removeLesson
};
