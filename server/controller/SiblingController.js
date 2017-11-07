const {connection} = require('../db/db-connection');

const getAllSiblings = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM sibling", (err, res) => {
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
    connection.query("DELETE FROM sibling WHERE (student_id=? and sibling_id=?)", [
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
