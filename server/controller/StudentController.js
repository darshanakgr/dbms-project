const {connection} = require('../db/db-connection');

const getAllStudent = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT student_id, student.first_name as sf, student.last_name as sl, gender, DATE_FORMAT(`register_date`, \"%M %d %Y\") as register_date1, parent.first_name as pf, parent_id, register_date FROM student join parent using (parent_id)", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewStudent = (student) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO student VALUE(?,?,?,?,?,?)",
        [nextId, student.firstName,student.lastName, student.gender, student.registerDate, student.parentId],
        (err, res) => {
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
    connection.query("UPDATE student SET first_name=?, last_name=?, gender=?, register_date=?, parent_id=? WHERE student_id=?",[
      student.firstName,
      student.lastName,
      student.gender,
      student.registerDate,
      student.parentId,
      student.studentId
    ],(err, result) => {
      if(err){
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeStudent = (student) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM student WHERE student_id=?",[
      student.studentId
    ],(err, result) => {
      if(err){
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
  getAllStudent,
  addNewStudent,
  updateStudent,
  removeStudent
};
