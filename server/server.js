const express = require('express');             //these modules are needed to connect to mysql
const bodyParser = require('body-parser');      //body parser is used to filter only the data we need from the response
var cors = require('cors');

const {connection} = require('./db/db-connection');   //we are using the db-connection.js module to connect to the database.
const InstrumentController = require('./controller/InstrumentController');      //different controllers for different entities
const ClassroomController = require('./controller/ClassroomController');
const LessonController = require('./controller/LessonController');

var app = express();        //instantiate the imported express module

app.use(bodyParser.json());
app.use(cors());    //setting up the body parser to output jsons

app.get("/getAllInstruments", (req, res)=>{                  //when the server receives a post request of 'getAllStudents'
  InstrumentController.getAllInstruments().then((result) => {       // it will connect to student controller
    res.status(200).send(result);                             //if the result is success, then return the result
  }).catch((err) => {
    res.status(400).send(err);                                    // else return the error
  })
});

app.get("/getAllClassrooms", (req, res)=>{                  //when the server receives a post request of 'getAllStudents'
  ClassroomController.getAllClassrooms().then((result) => {       // it will connect to student controller
    res.status(200).send(result);                             //if the result is success, then return the result
  }).catch((err) => {
    res.status(400).send(err);                                    // else return the error
  })
});

app.get("/getAllLessons", (req, res)=>{                  //when the server receives a post request of 'getAllStudents'
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
  console.log("Server is up on 3000");                        //echoing that server is up and running on port 3000
});
