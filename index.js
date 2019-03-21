'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('public/index.ejs');
});

app.listen(process.env.PORT, () => {
  console.log('Web Server up on port', process.env.PORT);
});
