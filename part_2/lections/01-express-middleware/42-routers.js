const express = require('express'), app = express();
const { host, port } = require('./config.json');

app.use(express.json());

app.use('/abiturs', require('./routes/abiturs.js'));
app.use(['/users', '/'], require('./routes/index.js'));

app.listen(port, host, () => console.log(`http://${host}:${port}/`));
