var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var StudentController = require("./controller/StudentController");
var ParentController = require("./controller/ParentController");
var InstrumentController = require('./controller/InstrumentController');      //different controllers for different entities
var ClassroomController = require('./controller/ClassroomController');
var LessonController = require('./controller/LessonController');
var CategoryController = require('./controller/CategoryController');
var TeacherController = require('./controller/TeacherController');
var PaymentController = require('./controller/PaymentController');
var PlayController = require('./controller/PlayController');
var SiblingController = require('./controller/SiblingController');
var UserController = require('./controller/UserController');
var CategoryController = require('./controller/CategoryController');
var EnrollmentController = require('./controller/EnrollmentController');
var ClassController = require('./controller/ClassController');
var AttendanceController = require('./controller/AttendanceController');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/getAllParents", (req, res) => {
  ParentController.getAllParents().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllStudents", (req, res) => {
  StudentController.getAllStudent().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateStudent", (req, res) => {
  StudentController.updateStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeStudent", (req, res) => {
  StudentController.removeStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewStudent", (req, res) => {
  StudentController.addNewStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewParent", (req, res) => {
  ParentController.addNewParent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllInstruments", (req, res) => {
  InstrumentController.getAllInstruments().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateInstrument", (req, res) => {
  InstrumentController.updateInstrument(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeInstrument", (req, res) => {
  InstrumentController.removeInstrument(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewInstrument", (req, res) => {
  InstrumentController.addNewInstrument(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllTeachers", (req, res) => {
  TeacherController.getAllTeachers().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateTeacher", (req, res) => {
  TeacherController.updateTeacher(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeTeacher", (req, res) => {
  TeacherController.removeTeacher(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewTeacher", (req, res) => {
  TeacherController.addNewTeacher(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllPayments", (req, res) => {
  PaymentController.getAllPayments().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updatePayment", (req, res) => {
  PaymentController.updatePayment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removePayment", (req, res) => {
  PaymentController.removePayment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewPayment", (req, res) => {
  PaymentController.addNewPayment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllClassrooms", (req, res) => {
  ClassroomController.getAllClassrooms().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateClassroom", (req, res) => {
  ClassroomController.updateClassroom(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeClassroom", (req, res) => {
  ClassroomController.removeClassroom(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewClassroom", (req, res) => {
  ClassroomController.addNewClassroom(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllLessons", (req, res) => {
  LessonController.getAllLessons().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateLesson", (req, res) => {
  LessonController.updateLesson(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeLesson", (req, res) => {
  LessonController.removeLesson(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewLesson", (req, res) => {
  LessonController.addNewLesson(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllParents", (req, res) => {
  ParentController.getAllParents().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateParent", (req, res) => {
  ParentController.updateParent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeParent", (req, res) => {
  ParentController.removeParent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewParent", (req, res) => {
  ParentController.addNewParent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllPlays", (req, res) => {
  PlayController.getAllPlays().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updatePlay", (req, res) => {
  PlayController.updatePlay(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removePlay", (req, res) => {
  PlayController.removePlay(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewPlay", (req, res) => {
  PlayController.addNewPlay(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllSiblings", (req, res) => {
  SiblingController.getAllSiblings().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeSibling", (req, res) => {
  SiblingController.removeSibling(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewSibling", (req, res) => {
  SiblingController.addNewSibling(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllUsers", (req, res) => {
  UserController.getAllUsers().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateUser", (req, res) => {
  UserController.updateUser(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeUser", (req, res) => {
  UserController.removeUser(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewUser", (req, res) => {
  UserController.addNewUser(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllCategories", (req, res) => {
  CategoryController.getAllCategories().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateCategory", (req, res) => {
  CategoryController.updateCategory(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeCategory", (req, res) => {
  CategoryController.removeCategory(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewCategory", (req, res) => {
  CategoryController.addNewCategory(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewEnrollment", (req, res) => {
  EnrollmentController.addNewEnrollment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllEnrollments", (req, res) => {
  EnrollmentController.getAllEnrollments().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateEnrollment", (req, res) => {
  EnrollmentController.updateEnrollment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeEnrollment", (req, res) => {
  EnrollmentController.removeEnrollment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllClasses", (req, res) => {
  ClassController.getAllClasses().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateClass", (req, res) => {
  ClassController.updateClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeClass", (req, res) => {
  ClassController.removeClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewClass", (req, res) => {
  ClassController.addNewClass(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/addNewAttendance", (req, res) => {
  AttendanceController.addNewAttendance(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get("/getAllAttendanceRecords", (req, res) => {
  AttendanceController.getAllAttendanceRecords().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.patch("/updateAttendance", (req, res) => {
  AttendanceController.updateAttendance(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/removeAttendance", (req, res) => {
  AttendanceController.removeAttendance(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

//login
app.post("/createUser", (req, res) => {
  var user = req.body;
  UserController.createNewUser(user).then((username) => {
    res.status(200).send({username});
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post("/login", (req, res) => {
  var user = req.body;
  UserController.findByCredentials(user.username, user.password).then((authenticatedUser) => {
    console.log(authenticatedUser.access_level);
    return UserController.generateAuthToken(authenticatedUser).then((token) => {
      res.status(200).header("x-auth", token).send({
        username:user.username,
        token:token,
        accessLevel:authenticatedUser.access_level
      });
    });
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.get('/logout', UserController.authenticate, (req, res) => {
  UserController.removeToken(req.token).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
