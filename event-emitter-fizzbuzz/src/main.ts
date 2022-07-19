import { EventEmitter } from 'events'

export const fizzBuzzEventEmitter = () => {
  function createFizzBuzzEvent(count: number) {
    const eventEmitter = new EventEmitter()
    // _eventEmitter(eventEmitter, count)
    process.nextTick(() => _eventEmitter(eventEmitter, count))
    return eventEmitter
  }

  async function _eventEmitter(eventEmitter: EventEmitter, count: number) {
    eventEmitter.emit('start')
    // await new Promise((resolve) => setTimeout(resolve, 1))
    for (let i = 1; i < count; i++) {
      if (i % 15 === 0) {
        eventEmitter.emit('FizzBuzz', i)
      } else if (i % 3 === 0) {
        eventEmitter.emit('Fizz', i)
      } else if (i % 5 === 0) {
        eventEmitter.emit('Buzz', i)
      } else {
        eventEmitter.emit('other', i)
      }
    }
    eventEmitter.emit('end', eventEmitter)
  }

  function startListerer() {
    console.log('---------- fizzBuzzEventEmitter start ----------')
  }

  function fizzBuzzListener(i: number) {
    console.log('FizzBuzz', i)
  }

  function fizzListener(i: number) {
    console.log('Fizz', i)
  }

  function buzzListener(i: number) {
    console.log('Buzz', i)
  }

  function otherListener(i: number) {
    console.log(i)
  }

  function endListener(eventEmitter: EventEmitter) {
    console.log('---------- fizzBuzzEventEmitter end ----------')
    eventEmitter
      .off('start', startListerer)
      .off('FizzBuzz', fizzBuzzEventEmitter)
      .off('Fizz', fizzListener)
      .off('Buzz', buzzListener)
      .off('other', otherListener)
      .off('end', endListener)
  }

  createFizzBuzzEvent(40)
    .on('start', startListerer)
    .on('FizzBuzz', fizzBuzzListener)
    .on('Fizz', fizzListener)
    .on('Buzz', buzzListener)
    .on('other', otherListener)
    .on('end', endListener)
}

fizzBuzzEventEmitter()
