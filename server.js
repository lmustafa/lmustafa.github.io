'use strict'
//
//console.log('server is starting');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
