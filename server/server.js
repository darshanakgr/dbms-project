var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var StudentController = require("./controller/StudentController");
var ParentController = require("./controller/ParentController");
var InstrumentController = require('./controller/InstrumentController');      //different controllers for different entities
var ClassroomController = require('./controller/ClassroomController');
var LessonController = require('./controller/LessonController');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/getAllStudents", (req, res) => {
  StudentController.getAllStudent().then((result) => {
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

app.patch("/updateStudent", (req, res) => {
  StudentController.updateStudent(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.delete("/removeStudent", (req, res) => {
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

app.get("/getAllInstruments", (req, res) => {                       //when the server receives a post request of 'getAllStudents'
  InstrumentController.getAllInstruments().then((result) => {       // it will connect to student controller
    res.status(200).send(result);                                   //if the result is success, then return the result
  }).catch((err) => {
    res.status(400).send(err);                                       // else return the error
  })
});

app.get("/getAllClassrooms", (req, res) => {                  //when the server receives a post request of 'getAllStudents'
  ClassroomController.getAllClassrooms().then((result) => {       // it will connect to student controller
    res.status(200).send(result);                             //if the result is success, then return the result
  }).catch((err) => {
    res.status(400).send(err);                                    // else return the error
  })
});

app.get("/getAllLessons", (req, res) => {                  //when the server receives a post request of 'getAllStudents'
  LessonController.getAllLessons().then((result) => {       // it will connect to student controller
    res.status(200).send(result);                             //if the result is success, then return the result
  }).catch((err) => {
    res.status(400).send(err);                                    // else return the error
  })
});

app.get("/", (req, res) => {                //just a dummy function to add a new student
  console.log(req.body);
  res.status(200).send("ok");
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
