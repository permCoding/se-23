const express = require('express'),
    app = express(),
    { port, host } = require('./config.json');

global.titles = require('./json/titles.json');

app.set('view engine', 'ejs');

app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts')); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/abiturs/new', require('./routers/rt_new'));
app.use('/', require('./routers/rt_index'));

app.listen(port, console.log(`http://${host}:${port}`));
