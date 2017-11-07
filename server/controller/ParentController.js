const {connection} = require('../db/db-connection');

const getAllParents = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM parent", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewParent = (instrument) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO parent VALUE(?,?,?,?)", [
        nextId,
        instrument.parentName,
        instrument.contactNo,
        instrument.address
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

const updateParent = (parent) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE parent SET name=?, contact_no=?, address=? WHERE parent_id=?", [
      parent.parentName,
      parent.contactNo,
      parent.address,
      parent.parentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeParent = (parent) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM parent WHERE parent_id=?", [
      parent.parentId
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
    connection.query("SELECT parent_id FROM parent ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("PA" + ("000" + (parseInt(result[0].parent_id.split("PA")[1]) + 1)).slice(-3));
      } else {
        resolve("PA001");
      }
    });
  });
};

module.exports = {
  getAllParents,
  addNewParent,
  updateParent,
  removeParent
};
