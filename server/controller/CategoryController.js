const {connection} = require('../db/db-connection');

const getAllCategories = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM category", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewCategory = (category) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO category VALUE(?,?)", [
        nextId,
        category.instrumentType
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

const updateCategory = (category) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE category SET instrument_type=? WHERE category_id=?", [
      category.instrumentType,
      category.categoryId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeCategory = (category) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM category WHERE category_id=?", [
      category.categoryId
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
    connection.query("SELECT category_id FROM category ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("C" + ("000" + (parseInt(result[0].category_id.split("C")[1]) + 1)).slice(-3));
      } else {
        resolve("C001");
      }
    });
  });
};

module.exports = {
  getAllCategories,
  addNewCategory,
  updateCategory,
  removeCategory
};
