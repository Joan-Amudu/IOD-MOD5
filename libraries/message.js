class Message {
    constructor() {
        this.id = this.#getRandomInt(10000)
      }
      #getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    log=(id, value)=>{
        console.log(`The ID of the caller is :${this.id} and the result is:${value}`)       
    }
    
}

/*
class Logger {
    constructor() {
      this.id = this.#getRandomInt(10000)
    }
    #getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    log = (id, message) => {
      console.log(`[Logger ObjectID:${id}]:${message}`)
    }
  }*/
  

module.exports = Message