const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Task = require("../models/task");
const passport = require('passport');

router.post('/register', (req, res) => {
  let user = new User({
    username: req.body.username,
    password: req.body.password
  });

  User.AddUser(user, response => {
    res.json(response)
  });

});

router.post('/authenticate', (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }
  
  User.Authenticate(user, response => {
    res.json(response)
  });
});

router.get('/test', passport.authenticate('jwt', {session:false}), (req, res) => {
  res.json({test:1});
});

router.post('/task', (req, res) => {
  let task = new Task({
    task: req.body.task,
    desc: req.body.desc,
    status: req.body.status,
    isDeleted: req.body.isDeleted,
    date: req.body.date
  });

  Task.addNewTask(task, response => {
    res.json(response);
  });

});

router.get('/taskList', (req, res) => {
  Task.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/updateTask/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  let task = {
    task: req.body.task,
    desc: req.body.desc,
    status: req.body.status,
    isDeleted: req.body.isDeleted,
    date: req.body.date
  };

  Task.updateTask(req.params.id, task, response => {
    res.json(response);
  })

});


module.exports = router;