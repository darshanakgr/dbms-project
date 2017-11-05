const {connection} = require('../db/db-connection');

const addNewParent = (parent) => {
    return new Promise((resolve, reject) => {
        getNextId().then((nextId) => {
            connection.query("INSERT INTO parent VALUE(?,?,?,?)",
                [nextId, parent.name, parent.contactNo, parent.address],
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
        connection.query("SELECT parent_id FROM parent ORDER BY 1 DESC LIMIT 1", (err, result) => {
            if (err) {
                reject(err);
            }

            if (result.length) {
                resolve("P" + ("000" + (parseInt(result[0].parent_id.split("P")[1]) + 1)).slice(-3));
            } else {
                resolve("P001");
            }
        });
    });
};

const getAllParents = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM parent;", (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    addNewParent,
    getAllParents
};