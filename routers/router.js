let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function (req, res) {
    controller.postCat(req, res);
});

router.get('/', (req, res) => {
    controller.getAllCat(req, res);
});

module.exports = router;


