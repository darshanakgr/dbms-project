const {connection} = require('../db/db-connection');

const getAllPayments = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT payment_id, name, CONCAT('Rs. ', FORMAT(amount, 0)) as amount_rupee, DATE_FORMAT(`paid_on`, \"%M %d %Y\") as pay_date, teacher_id, amount from teacherpayment natural join teacher", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const addNewPayment = (payment) => {
  return new Promise((resolve, reject) => {
    getNextId().then((nextId) => {
      connection.query("INSERT INTO teacherpayment VALUE(?,?,?,?)", [
        nextId,
        payment.teacherId,
        payment.amount,
        payment.paidOn
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

const updatePayment = (payment) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE teacherpayment SET teacher_id=?, amount=?, paid_on=? WHERE payment_id=?", [
      payment.teacherId,
      payment.amount,
      payment.paidOn,
      payment.paymentId
    ], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
};

const removePayment = (payment) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM teacherpayment WHERE payment_id=?", [
      payment.paymentId
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
    connection.query("SELECT payment_id FROM teacherpayment ORDER BY 1 DESC LIMIT 1", (err, result) => {
      if (err) {
        reject(err);
      }

      if (result.length) {
        resolve("P" + ("000" + (parseInt(result[0].payment_id.split("P")[1]) + 1)).slice(-3));
      } else {
        resolve("P001");
      }
    });
  });
};

module.exports = {
  getAllPayments,
  addNewPayment,
  updatePayment,
  removePayment
};
