'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.render('/index.html');
});

app.listen(process.env.PORT, () => {
  console.log('Web Server up on port', process.env.PORT);
});
