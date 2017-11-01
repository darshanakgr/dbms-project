const express = require('express');             //these modules are needed to connect to mysql
const bodyParser = require('body-parser');      //body parser is used to filter only the data we need from the response

const {connection} = require('./db/db-connection');   //we are using the db-connection.js module to connect to the database.
const StudentController = require('./controller/StudentController');      //different controllers for different entities

var app = express();        //instantiate the imported express module

app.use(bodyParser.json());     //setting up the body parser to output jsons

app.get("/getAllStudents", (req, res)=>{                  //when the server receives a post request of 'getAllStudents'
  StudentController.getAllStudents().then((result) => {       // it will connect to student controller
    res.status(200).send(result);                             //if the result is success, then return the result
  }).catch((err) => {
    res.status(400).send(err);                                    // else return the error
  })
});

app.post("/addNewStudent", (req, res) => {                //just a dummy function to add a new student
  console.log(req.body);
  res.status(200).send("ok");
});


app.listen(3000, () => {
  console.log("Server is up on 3000");                        //echoing that server is up and running on port 3000
});
