type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingTag = `h${HeadingLevel}`

const h1: HeadingTag = 'h1'
const h2: HeadingTag = 'h2'

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Hour = `0${Digit}` | `1${Digit}` | `2${0 | 1 | 2 | 3}`
type Minutes = `0${Digit}` | `${1 | 2 | 3 | 4 | 5}${Digit}`
type Seconds = `0${Digit}` | `${1 | 2 | 3 | 4 | 5}${Digit}`
type Time = `${Hour}:${Minutes}:${Seconds}`

const hour: Hour = '23'
const minutes: Minutes = '59'
const seconds: Seconds = '00'
const time: Time = '23:59:00'

export const templateLiteralTypes = () => {
  console.log('template literal types')
  console.log(h1, h2)
  console.log(hour)
  console.log(minutes)
  console.log(seconds)
  console.log(time)
}
