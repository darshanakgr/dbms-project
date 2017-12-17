const {connection} = require('../db/db-connection');

const getAllInstruments = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT instrument_id,instrument_name,DATE_FORMAT(purchased_date, \"%M %d %Y\") as per_date,instrument_type, category_id FROM instrument natural join category", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewInstrument = (instrument) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO instrument VALUE(?,?,?,?)", [
        nextId,
        instrument.instrumentName,
        instrument.purchasedDate,
        instrument.categoryId
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

const updateInstrument = (instrument) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE instrument SET instrument_name=?, purchased_date=?, category_id=? WHERE instrument_id=?", [
      instrument.instrumentName,
      instrument.purchasedDate,
      instrument.categoryId,
      instrument.instrumentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removeInstrument = (instrument) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM instrument WHERE instrument_id=?", [
      instrument.instrumentId
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
    connection.query("SELECT instrument_id FROM instrument ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("I" + ("000" + (parseInt(result[0].instrument_id.split("I")[1]) + 1)).slice(-3));
      } else {
        resolve("I001");
      }
    });
  });
};

module.exports = {
  getAllInstruments,
  addNewInstrument,
  updateInstrument,
  removeInstrument
};
