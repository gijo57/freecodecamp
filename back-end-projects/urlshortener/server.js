require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();
const db = require('mongoose');
const shortId = require('shortid');
const port = process.env.PORT || 3000;
const Url = require('./url');

db.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/shorturl/:short_url', async (req, res) => {
  const shortUrl = req.params.short_url;
  const url = await Url.findOne({ shortUrl });
  res.redirect(url.url);
});

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

  dns.lookup(dnsUrl, async (err, address, family) => {
    if (err) {
      res.json({ error: 'invalid url' });
    } else {
      const shortUrl = shortid.generate();
      const newUrl = new Url({
        shortUrl,
        url
      });

      await newUrl.save();

      res.json({
        original_url: url,
        short_url: shortUrl
      });
    }
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
