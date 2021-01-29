const express = require('express');
const router = require('./routes/index');
const port = 5000;

const app = express();

app.use('/', router);
app.use('/status', router);
app.use('/stats', router);

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
});

module.exports = app;
