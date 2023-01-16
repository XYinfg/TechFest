const express = require('express');
const router = express.Router();

router.get('/inventory', (req, res) => {
    const str = [{
        "name" : "iPhone 13 Pro Max",
        "price" : 1399.99,
        "quantity" : 10
    }];
    res.end(JSON.stringify(str));
});

router.post('/addInventory', (req, res) => {
    res.end('NA');
});

module.exports = router;