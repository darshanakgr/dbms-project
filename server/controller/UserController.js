const {connection} = require('../db/db-connection');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM user", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO user VALUE(?,?,?,?)", [
      user.username,
      user.password,
      user.id,
      user.accessLevel
    ], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const updateUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE user SET password=?, id=?, access_level=? WHERE username=?", [
      user.password,
      user.id,
      user.access_level,
      user.username
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM user WHERE username=?", [
      user.username
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

module.exports = {
  getAllUsers,
  addNewUser,
  updateUser,
  removeUser
};
