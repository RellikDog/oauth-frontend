'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
  response.render('public/index.ejs');
});
app.listen(PORT, () => {
  console.log('Web Server up on port', PORT);
});
