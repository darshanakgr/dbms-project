const {connection} = require('../db/db-connection');        //importing db connection and instantiating it

var getAllClassrooms = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM classroom", (err, result) => {        //individual function for different commands
      if(err){
        reject(err);                              //on error, reject the error
      }
      resolve(result);                             // on success, return result
    })
  });
};

module.exports = {
  getAllClassrooms             //exporting module so it can be imported to other modules
};
