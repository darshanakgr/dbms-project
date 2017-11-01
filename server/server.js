const express = require('express');
const bodyParser = require('body-parser');

const {connection} = require('./db/db-connection');
const StudentController = require('./controller/StudentController');

var app = express();

app.use(bodyParser.json());

app.get("/getAllStudents", (req, res)=>{
  StudentController.getAllStudents().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  })
});

app.post("/addNewStudent", (req, res) => {
  console.log(req.body);
  res.status(200).send("ok");
});


app.listen(3000, () => {
  console.log("Server is up on 3000");
});
