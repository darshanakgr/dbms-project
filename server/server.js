var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var StudentController = require("./controller/StudentController");
var ParentController = require("./controller/ParentController");
var InstrumentController = require('./controller/InstrumentController');      //different controllers for different entities
var ClassroomController = require('./controller/ClassroomController');
var LessonController = require('./controller/LessonController');
var CategoryController = require('./controller/CategoryController');
var InstrumentController = require('./controller/InstrumentController');

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

app.delete("/removeCategory", (req, res) => {
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

app.delete("/removeInstrument", (req, res) => {
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

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
