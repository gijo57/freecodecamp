const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./user');
const Exercise = require('./exercise');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/users/:_id/logs', async (req, res) => {
  const id = req.params;
  const user = await User.findById(id);

  const exercises = await Exercise.find({ userId: user._id }).map((e) => {
    return {
      description: e.description,
      duartion: e.duration,
      date: e.date
    };
  });

  const response = {
    _id: user._id,
    username: user.username,
    logs: exercises
  };

  res.json(response);
});

app.post('/api/users', async (req, res) => {
  const { username } = req.body;
  const user = new User({
    username
  });

  await user.save();

  res.json(user);
});

app.post('/api/users/:_id/exercises', async (req, res) => {
  const id = req.params;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = req.body.date ? new Date(req.body.date) : new Date();

  const user = await User.findById(id);

  const exercise = new Exercise({
    userId: user._id,
    description,
    duration,
    date
  });

  const response = {
    _id: user._id,
    username: user.username,
    description,
    duration,
    date: date
  };

  await exercise.save();
  res.json(response);
});

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
