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

app.post("/addNewCategory", (req, res) => {
  CategoryController.addNewCategory(req.body).then((result) => {
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
app.listen(3000, () => {
  console.log("Server is up on 3000");
});
