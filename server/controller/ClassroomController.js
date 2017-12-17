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

const addNewClassroom = (classroom) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO classroom VALUE(?,?)", [
        nextId,
        classroom.building
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


const updateClassroom = (classroom) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE classroom SET building=? WHERE class_room_id=?", [
      classroom.building,
      classroom.classroomId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeClassroom = (classroom) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM classroom WHERE class_room_id=?", [
      classroom.classroomId
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
    connection.query("SELECT class_room_id FROM classroom ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("CR" + ("000" + (parseInt(result[0].class_room_id.split("CR")[1]) + 1)).slice(-3));
      } else {
        resolve("CR001");
      }
    });
  });
};

module.exports = {
  getAllClassrooms,             //exporting module so it can be imported to other modules
  addNewClassroom,
  updateClassroom,
  removeClassroom
};
