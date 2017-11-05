const {connection} = require('../db/db-connection');

const getAllStudent = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM student", (err, res) => {
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
                [nextId, student.name, student.gender, new Date().toISOString().split("T")[0], student.mobileNo, student.parentId],
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
    addNewStudent
};