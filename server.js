const express = require('express');
const router = require('./routes/index');
const port = process.env.PORT || 5000;

const app = express();

app.use('/', router);
app.use('/status', router);
app.use('/stats', router);

app.listen(port);

module.exports = app;
