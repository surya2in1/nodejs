const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/* arrow function */
eventEmitter.on('start',()=>{
    console.log('Event start is called');
})
eventEmitter.emit('start') // event name start calling

/* function with parameter */
eventEmitter.on('myCust',(number)=>{
    console.log('Number: '+number);
})
eventEmitter.emit('myCust', 10); // event myCust calling

/* function with */
eventEmitter.on('haha',(num1,num2)=>{
    console.log(`Hello addition is ${num1 + num2}`);
});
eventEmitter.emit('haha', 5, 2); // event haha calling