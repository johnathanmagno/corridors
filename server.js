const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
  });

  app.get('/home.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/corridors.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'corridors.html'));
});

  app.get('/start.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'start.html'));
});

app.get('/forest.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'forest.html'));
});

app.get('/caves.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'caves.html'));
});

app.post('/save', (req, res) => {
  const playerName = req.body.playerName;
  const data = {
    playerName: playerName
  };
  const jsonData = JSON.stringify(data);
  fs.writeFile(path.join(__dirname, 'data.json'), jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved');
      res.send('Data saved');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
