require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/shorturl/', function (req, res) {
  const url = req.body.url;
  let dnsUrl;
  if (url.includes('https')) {
    dnsUrl = url.substr(8);
  } else if (url.includes('http')) {
    dnsUrl = url.substr(7);
  } else {
    dnsUrl = 'Not valid';
  }

  dns.lookup(dnsUrl, (err, address, family) => {
    if (err) {
      res.json({ error: 'invalid url' });
    } else {
      res.json({
        original_url: url,
        short_url: Number(address.substr(0, 3))
      });
    }
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
