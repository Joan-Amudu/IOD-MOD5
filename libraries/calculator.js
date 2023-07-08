const Message =require('./Message')

class Calculator {
    constructor() {
        this.id = this.#getRandomInt(1000)
        this.Message = new Message()
    }
    #getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    #log = (value) => {
        this.Message.log(this.id,value)
      }
    //#log=(value)=>{
    //    console.log(`[Calculator
    //    :${this.id}]:${value}`)
    //}
    add(num1, num2) {
        const value=num1+num2
        this.#log(value)
        return value;
    }
    subtract(num1, num2) {
        const value=num1-num2
        this.#log(value)
        return value;
    }
    divide(num1, num2) {
        const value=num1/num2
        this.#log(value)
        return value;
    }
    multiply(num1, num2) {
        const value=num1*num2
        this.#log(value)
        return value;
    }
}
module.exports=Calculator