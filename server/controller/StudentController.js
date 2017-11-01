const {connection} = require('../db/db-connection');

var getAllStudents = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM student", (err, result) => {
      if(err){
        reject(err);
      }
      resolve(result);
    })
  });
};

module.exports = {
  getAllStudents
};
