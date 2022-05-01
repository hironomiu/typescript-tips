import { moduleA } from './modules/moduleA'
import { moduleB } from './modules/moduleB'
import { moduleC } from './modules/moduleC'
import { moduleD } from './modules/moduleD'
import { moduleD2 } from './modules/moduleD2'
import { moduleE } from './modules/moduleE'
import { moduleF } from './modules/moduleF'
import { moduleG } from './modules/moduleG'
import { moduleH } from './modules/moduleH'
import { moduleI } from './modules/moduleI'
import { binarySearch } from './modules/binarySearch'
import { templateLiteralTypes } from './modules/templateLiteralTypes'
import { reduceImitation } from './modules/reduceImitation'
import { typeAssertion } from './modules/typeAssertion'
import { overloadFunction } from './modules/overloadFunction'
import { nullishCoalescing } from './modules/nullishCoalescing'
import { valuesOf } from './modules/valuesOf'
import { parameters } from './modules/parameters'
import { rest } from './modules/rest'
import { fizzBuzzEventEmitter } from './modules/fizzBuzzEventEmitter'
import { FizzBuzzClassEventEmitter } from './modules/fizzBuzzClassEventEmitter'

console.log('========== typescript-tips ==========')
moduleA()
moduleB()
moduleC()
moduleD()
moduleD2()
moduleE()
moduleF()
moduleG()
moduleH()
moduleI()
console.log('---------- binarySearch start ----------')
console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log('---------- binarySearch end ----------')

templateLiteralTypes()

console.log('---------- reduceImitation start ----------')
console.log(reduceImitation([1, 2, 3, 4], (accu, curr) => (accu += curr), 0))
console.log(
  reduceImitation(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    (accu, curr) => (accu += curr),
    0
  )
)
console.log(
  reduceImitation(
    ['a', 'b', 'c'],
    (accu, curr, index) => {
      accu[index] = '<tag>' + curr + '</tag>'
      return accu
    },
    [] as string[]
  )
)
console.log('---------- reduceImitation end ----------')

console.log('---------- typeAssertion start ----------')
typeAssertion()
console.log('---------- typeAssertion end ----------')
console.log('---------- overloadFunction start ----------')
const overloadFunctionRet1 = overloadFunction([1, 2, 3])
console.log(overloadFunctionRet1)
const overloadFunctionRet2 = overloadFunction(['a', 'b', 'c'])
console.log(overloadFunctionRet2)
console.log('---------- overloadFunction end ----------')
console.log('---------- nullishCoalescing start ----------')
nullishCoalescing()
console.log('---------- nullishCoalescing end ----------')
console.log('---------- valuesOf start ----------')
valuesOf()
console.log('---------- valuesOf end ----------')
console.log('---------- parameters start ----------')
parameters()
console.log('---------- parameters end ----------')
console.log('---------- rest start ----------')
rest()
console.log('---------- rest end ----------')
// fizzBuzzEventEmitter
fizzBuzzEventEmitter()
//
const fizzBuzzClassEventEmitter = new FizzBuzzClassEventEmitter(40)
fizzBuzzClassEventEmitter.emitOn()
process.nextTick(() => fizzBuzzClassEventEmitter.start())
fizzBuzzClassEventEmitter.end()
console.log('========== typescript-tips ==========')
