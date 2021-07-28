require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/shorturl/', function (req, res) {
  const url = req.body.url;

  res.json({
    original_url: url,
    short_url: 1
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
