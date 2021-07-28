const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/api/:date?', (req, res) => {
  const { date } = req.params;
  let unixStamp, dateStamp;
  if (!date) {
    unixStamp = Date.now();
    dateStamp = new Date().toUTCString();
  } else {
    if (Date.parse(date)) {
      unixStamp = Date.parse(date);
      dateStamp = new Date(date).toUTCString();
    } else {
      unixStamp = Number(date);
      dateStamp = new Date(Number(date)).toUTCString();
    }
  }

  if (dateStamp === 'Invalid Date') {
    res.json({ error: dateStamp });
  }

  res.json({
    unix: unixStamp,
    utc: dateStamp
  });
});

const listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
