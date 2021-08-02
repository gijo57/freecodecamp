const express = require('express');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const upload = multer({ dest: 'uploads/' });

require('dotenv').config();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const name = req.file.originalname;
  const type = req.file.mimetype;
  const size = req.file.size;
  res.json({ name, type, size });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
