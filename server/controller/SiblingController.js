const {connection} = require('../db/db-connection');

const getAllSiblings = () => {
  return new Promise((resolve, reject) => {
    connection.query("select a.first_name as sib1, b.first_name as sib2, sibling.student_id, sibling.sibling_id from student as a, student as b join sibling where a.student_id = sibling.student_id and b.student_id = sibling.sibling_id", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewSibling = (sibling) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO sibling VALUE(?,?)", [
      sibling.studentId,
      sibling.siblingId
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const removeSibling = (sibling) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM sibling WHERE (student_id=? and sibling_id=?) or (sibling_id=? and student_id=?)", [
      sibling.studentId,
      sibling.siblingId,
      sibling.studentId,
      sibling.siblingId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

module.exports = {
  getAllSiblings,
  addNewSibling,
  removeSibling
};
