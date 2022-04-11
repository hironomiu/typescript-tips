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
    ['a', 'b', 'c'],
    (accu, curr, index) => {
      accu[index] = curr + curr
      return accu
    },
    [] as string[]
  )
)
console.log('---------- reduceImitation end ----------')

console.log('========== typescript-tips ==========')
