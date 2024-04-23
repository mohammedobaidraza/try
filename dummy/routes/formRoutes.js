// dummy/routes/formRoutes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const formModel = require('../models/formModel');

router.post('/submit-form', (req, res) => {
  // Assume req.body has the structure shown above and is parsed by body-parser
  console.log(req.body);

  // Now, you create a new submission object based on the formModel structure
  const newSubmission = {
      email: req.body.email,
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      collegeName: req.body.collegeName,
      year: req.body.year,
      alphaSkillSet: req.body.alphaSkillSet,
      discoveryChannel: req.body.discoveryChannel,
      motivation: req.body.motivation,
      valueAddition: req.body.valueAddition
  };


    // Save to a file for simplicity
    const filePath = path.join(__dirname, '../data/submissions.json');
    fs.readFile(filePath, (err, fileData) => {
        let submissions = err || fileData.length === 0 ? [] : JSON.parse(fileData.toString());
        submissions.push(newSubmission);
        fs.writeFile(filePath, JSON.stringify(submissions, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to file');
            }
            res.status(201).send('Form data saved successfully');
        });
    });
});

module.exports = router;
