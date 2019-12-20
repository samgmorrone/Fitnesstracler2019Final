const express = require('express');
const { Users } = require('../models/Users');

const app = express.Router();

// add an exercise to a user
app.post('/add', (req, res) => {
   Users.Add_Exercise(req.body.user, req.body.Exercises)
   res.send({success: true});     
});

// delete an exercise from a user
app.post('/delete', (req, res) => {
    Users.Delete_Exercise(req.body.user, req.body.Exercises)
    res.send({success: true});  
});
app.post

module.exports = app;