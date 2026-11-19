
const EventEmitter = require('events');

const event = new EventEmitter();

// Create event listener
event.on('click', () => {
    console.log('Button clicked!');
});

// Trigger event
event.emit('click');
