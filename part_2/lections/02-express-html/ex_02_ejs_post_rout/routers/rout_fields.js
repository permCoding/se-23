const router = require('express').Router();

router.get('/abiturs/fields', (req, res) => {
    res.render('fields', { titles: global.titles });
});

router.post('/abiturs/fields', (req, res) => {
    let { keys, sortField, direct } = req.body;
    let d = direct==="asc"? +1: -1;
    res.render('index-01', 
        {
            keys, 
            titles: global.titles, 
            arr: global.abiturs.sort((a,b) => a[sortField]>b[sortField]? +1*d: -1*d)
            // arr: global.abiturs.toSorted((a,b) => a[sortField]>b[sortField]? +1*d: -1*d)
        }
    );
});

router.get('/', (req, res) => {
    res.render('index-01', { 
        titles, 
        arr: global.abiturs, 
        keys: Object.keys(global.titles)
    });
});

module.exports = router;
