const express = require('express');
const db = require('./db');
const config = require('./shared/config');
const handleError = require('./shared/errors/handle');
const router = require('./modules');

const app = express();

app.use(express.json());
app.use(router);
app.use(handleError);

db();
app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
