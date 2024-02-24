const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.get('/', (req, res) => {
    res.send('/')
});

app.get(['/txt','/text'], (req, res) => {
    res.set('Content-Type', 'text/plain');
    let txt = `${req.url}\n- 111\n- 222\n- 333\n- 444\n`;
    res.send(txt)
});

app.get('/html', (req, res) => {
    res.set('Content-Type', 'text/html');
    let html = '- 111<br>- 222<br>- 333<br>- 444<br>';
    res.send(html);
});
// - - - - - показать как убивать процессы - - - - - 
app.get('/json', (req, res) => {
    log(req.url.split('/'))
    res.set('Content-Type', 'text/plain');
    let obj = { id: 101, user: 'solver' };
    res.send(JSON.stringify(obj, null, 4));
});

app.get('/json/:num', (req, res) => {
    log(req.url.split('/'))
    let obj = { id: 202, user: 'answer' };
    res.json(obj);
});

app.get('/error', (req, res) => {
    log('error')
    res.status(404).end()
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
