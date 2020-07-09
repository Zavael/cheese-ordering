var express = require('express');
var router = express.Router();

// here we can add new routes corresponding to files in this dir
require('./customers').attachHandlers(router);
//    require('./goods').attachHandlers(router);

router.route('/')
    .get(function (req, res) {
        res.render('index', { title: 'Home' });
    });

module.exports = router;