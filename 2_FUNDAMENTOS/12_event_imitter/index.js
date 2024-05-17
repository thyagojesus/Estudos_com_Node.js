const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start',() => {
    console.log("Durante o eventEmitter.on")
})

console.log("Antes")

eventEmitter.emit('start')
console.log('Depoius do start')