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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/users', (req, res) => {});

app.post('/api/users/:_id/exercises', (req, res) => {});

const PORT = process.env.PORT || 3000;

const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
