const express = require('express'),
    app = express(),
    session = require('express-session'),
    md5 = require('md5'),
    log = console.log,
    sessionTime = 5 * 60_000, // 5 минут
    hashPassword = 'cfcd208495d565ef66e7dff9f98764da'

const host = 'localhost', port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'tasks',
    cookie: { maxAge: sessionTime }
}));

let form = '\
    <form> \
        <input type="password" id="pass" name="password" minlength="1" required> <br> \
        <button id="send_pass" formaction="/login" formmethod="post" type="submit"> \
            input password \
        </button> \
    </form>';

app.get(['/login','/'], (req, res) => {
    (req.session.user !== undefined)
        ? res.send(`=> Success ! => ${req.session.cookie.maxAge}`)
        : res.send(form)
});
    
app.post('/login', (req, res) => {
    if (md5(req.body.password) !== hashPassword) { 
        res.redirect('/'); 
    } else {
        req.session.user = 'admin';
        req.session.cookie.maxAge = sessionTime;
        res.redirect('/home');
    }
});

app.get('/home', (req, res) => {
    (req.session.user !== 'admin')
        ? res.redirect('/login')
        : res.send(`=> You're authorized => ${req.session.cookie.maxAge}`)
});

app.listen(port, host, () => log(`http://${host}:${port}`));
