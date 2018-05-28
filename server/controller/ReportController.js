const {connection} = require('../db/db-connection');

const getTeachersDetailReport = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM TeachersDetail;", (err, result) => {
      if (err) {
        reject(err);
      }
      var arr = Object.keys(result).map(function(k) { return result[k] });
      var response = [];
      arr.forEach((value) => {
        response.push(Object.keys(value).map(function(k) { return value[k] }));
      });
      resolve(response);
    })
  });
};

const getTeacherDetail = (teacherId) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT teacher_id, CONCAT(teacher.first_name, ' ', teacher.last_name) AS name, concat(teacher.address_line_1, ',', teacher.address_line_2, ',', teacher.address_line_3) AS address FROM teacher WHERE teacher_id=?", [
      teacherId
    ],(err, teacher) => {
      if (err || !teacher.length) {
        reject(err);
      }
      resolve(teacher[0]);
    })
  });
}

const getTeacherMobiles = (teacherId) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT contact_no FROM teachermobile WHERE teacher_id=?", [
      teacherId
    ],(err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
}

const getTeacherEnrolledModules = (teacherId) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT\n" +
      "    class.class_id                                     AS 'ID',\n" +
      "    class.class_year                                   AS 'Year',\n" +
      "    class.class_day                                    AS 'Day',\n" +
      "    class.class_time                                   AS 'Time',\n" +
      "    lesson.lesson_name                                 AS 'Lesson'\n" +
      "  FROM class\n" +
      "    JOIN lesson ON class.lesson_id = lesson.lesson_id\n" +
      "    JOIN teacher ON class.teacher_id = teacher.teacher_id\n" +
      "    JOIN classroom ON class.class_room_id = classroom.class_room_id\n" +
      "WHERE teacher.teacher_id = ?", [
      teacherId
    ],(err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
}
const getTeacherPayments = (teacherId) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT payment_id, amount, paid_on FROM teacherpayment WHERE teacher_id = ?", [
      teacherId
    ],(err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  });
}

const getTeacherDetailReport = (teacherId) => {
  return new Promise((resolve, reject) => {
    getTeacherDetail(teacherId).then((teacher) => {
      getTeacherMobiles(teacherId).then((mobiles) => {
        teacher.mobileNo = Object.keys(mobiles).map(function(k) { return mobiles[k].contact_no});
        getTeacherEnrolledModules(teacherId).then((modules) => {
          teacher.modules = [];
          modules.forEach((module) => {
            teacher.modules.push(Object.keys(module).map(function(k) { return module[k]}));
            getTeacherPayments(teacherId).then((payments) => {
              teacher.payments = [];
              payments.forEach((payment) => {
                teacher.payments.push(Object.keys(payment).map(function(k) { return payment[k]}));
                resolve(teacher);
              });
            });
          })
        });
      });
    }).catch((e) => {
      reject(e);
    })
  })

};

module.exports = {
  getTeachersDetailReport,
  getTeacherDetailReport
};
