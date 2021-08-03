const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./user');
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

app.post('/api/users', async (req, res) => {
  const { username } = req.body;
  const user = new User({
    username
  });

  await user.save();

  res.json(user);
});

app.post('/api/users/:_id/exercises', (req, res) => {});

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
