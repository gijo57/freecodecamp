require('dotenv').config();
const reqip = require('@supercharge/request-ip');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/api/whoami', function (req, res) {
  const ipaddress = reqip.getClientIp(req);
  const language = req.header('Accept-Language');
  const software = req.header('User-Agent');

  res.json({
    ipaddress,
    language,
    software
  });
});

const listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
