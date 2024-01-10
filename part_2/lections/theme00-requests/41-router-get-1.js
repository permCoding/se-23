const express = require('express'), app = express();

const { host, port } = require('./config.json');

const router_abiturs = require('./routes/abiturs-1.js').router;

app.use('/abiturs', router_abiturs);

app.get('/', (req, res) => { res.status(200).send('/') });

app.listen(port, host, () => console.log(`http://${host}:${port}/`));
