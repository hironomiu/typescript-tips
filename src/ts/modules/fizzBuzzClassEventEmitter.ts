import { EventEmitter } from 'events'

export class FizzBuzzClassEventEmitter extends EventEmitter {
  until: number
  count: number
  constructor(until: number) {
    super()
    this.until = until
    this.count = 1
  }
  start() {
    this.emit('start')
    for (this.count = 1; this.count < this.until; this.count++) {
      if (this.count % 15 === 0) {
        this.emit('FizzBuzz')
      } else if (this.count % 3 === 0) {
        this.emit('Fizz')
      } else if (this.count % 5 === 0) {
        this.emit('Buzz')
      } else {
        this.emit('other', this.count)
      }
    }
    this.emit('end')
  }
  emitOn() {
    this.on('start', this.startListener)
      .on('FizzBuzz', this.fizzBuzzListener)
      .on('Fizz', this.fizzListener)
      .on('Buzz', this.buzzListener)
      .on('other', this.otherListener)
      .on('end', this.endListener)
  }
  startListener() {
    console.log('---------- fizzBuzzClassEventEmitter start ----------')
    console.log('start')
  }
  fizzBuzzListener() {
    console.log('FizzBuzz')
  }
  fizzListener() {
    console.log('Fizz')
  }
  buzzListener() {
    console.log('Buzz')
  }
  otherListener(count: number) {
    console.log(count)
  }
  endListener() {
    console.log('end')
    console.log('---------- fizzBuzzClassEventEmitter end ----------')
  }
  end() {
    this.off('start', () => console.log('start'))
      .off('FizzBuzz', this.fizzBuzzListener)
      .off('Fizz', this.fizzListener)
      .off('Buzz', this.buzzListener)
      .off('other', this.otherListener)
      .off('end', () => console.log('end'))
  }
}
