const express = require('express'), app = express();

const { host, port } = require('./config.json');

const router = require('./routes/abiturs-2.js');

app.use(router);

app.listen(port, host, () => console.log(`http://${host}:${port}/`));
