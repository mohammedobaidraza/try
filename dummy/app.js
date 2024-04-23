

const express = require('express');
const cors = require('cors');
const path = require('path');

const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 5000; // Use an appropriate port

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/api', formRoutes); // Mount the form routes
app.use(cors());
// .........................

app.get('/api/submissions', (req, res) => {
  const filePath = path.join(__dirname, 'data/submissions.json');
  fs.readFile(filePath, (err, data) => {
      if (err) {
          res.status(500).send('Error reading the submissions file');
      } else {
          res.json(JSON.parse(data.toString()));
      }
  });
});
// ...........................

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
