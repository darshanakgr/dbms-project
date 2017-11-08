var jwt = require('jsonwebtoken');
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

var createNewUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO user VALUE(?,PASSWORD(?),?,?)", [
      user.username,
      user.password,
      user.id,
      user.accessLevel
    ], (err, result) => {
      if (err) {
        return reject(err)
      }
      resolve(user.username);
    });
  });
};

var generateAuthToken = (user) => {
  return new Promise((resolve, reject) => {
    var token = jwt.sign({username: user.username, accessLevel: user.access_level}, "rubix").toString();

    connection.query("INSERT INTO token VALUE(?,?,?)", [
      user.username,
      user.access_level,
      token
    ], (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
};

var findUserByToken = (token) => {
  return new Promise((resolve, reject) => {
    var decoded;

    try {
      decoded = jwt.verify(token, "rubix")
    } catch (e) {
      reject(e);
    }

    connection.query("SELECT username FROM token WHERE username = ? AND access = ? AND token = ?", [
      decoded.username,
      decoded.accessLevel,
      token
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });

};

var findByCredentials = (username, password) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM user WHERE username = ? AND password = PASSWORD(?)", [
      username,
      password
    ], (err, result) => {
      if (err) {
        return reject(err);
      }

      if (result.length == 0) {
        return reject({message: "No user found"});
      }
      resolve(result[0]);
    })
  });
};

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');
  findUserByToken(token).then((user) => {
    if (user.length == 0) {
      return Promise.reject();
    }
    req.user = user[0].username;
    req.token = token;
    next();
  }).catch((err) => {
    res.status(401).send(err);
  });
};

var removeToken = (token) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM token WHERE token = ?", [
      token
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
  removeUser,
  generateAuthToken,
  createNewUser,
  authenticate,
  findByCredentials,
  removeToken
};
