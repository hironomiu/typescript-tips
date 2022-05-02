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

  date = new Date('hoge')
  console.log(date)
  console.log(Number.isNaN(date.getTime()))
}
