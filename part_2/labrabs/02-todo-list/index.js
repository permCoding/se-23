const express = require('express'),
    app = express(),
    PORT = 3000,
    log = console.log;

let json = [ 
    {
        'id': 12,
        'title': 'Мероприятие'
    }
]

app.get(['/tasks', '/'], (req, res) => {
    res.json(json);
});

app.listen(PORT, () => log('http://[::1]:3000'));
