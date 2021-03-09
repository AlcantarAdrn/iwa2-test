const express = require('express'),
router = express.Router();

router.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: 'Hello BsCBesssstsss !', data :[
        req.params.foo,
        req.params.bar
    ]});
});

router.post('/hello/', (req, res) => {
    res.json({result: 'Post was sent', data: req.body});
});

module.exports = router;