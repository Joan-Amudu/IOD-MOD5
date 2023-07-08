const Calculator = require('../libraries/Calculator');
let myCalc=new Calculator();

const addNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.add(number1,number2)
    console.log(result)
    res.status(200)
    res.json({add:result})
};
const subtractNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.subtract(number1,number2)
    console.log(result)
    res.status(200)
    res.json({subtract:result})
};
const divideNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.divide(number1,number2)
    console.log(result)
    res.status(200)
    res.json({divide:result})
};
const multiplyNumbers = (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let result=myCalc.multiply(number1,number2)
    console.log(result)
    res.status(200)
    res.json({multiply:result})
};

module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers
}