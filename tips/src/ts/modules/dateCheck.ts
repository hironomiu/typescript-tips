export const dateCheck = () => {
  let date: Date = new Date()
  console.log(Number(date))
  if (typeof date === 'object' && date instanceof Date) {
    console.log('date:', date)
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    console.log('date:', date)
  }
  date = new Date(1651478509475)
  console.log(Number(date))

  console.log(Date())
  console.log(Date)
  if (!Number.isNaN(date.getTime()) && date <= new Date()) {
    console.log(date)
  }
  date = new Date('hoge')
  console.log(date)
  console.log('true or false:', Number.isNaN(date.getTime()))

  if (Number.isNaN(date.getTime())) {
    console.log(date)
  }
}
