var express = require('express');
var router = express.Router();
var calculatorController = require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res)
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res)
});

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
});

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res)
});

module.exports = router;