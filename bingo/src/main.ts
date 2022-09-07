import { arrayInit, shuffle, judgment } from './libs'
import { VERTICAL, HORIZONTAL, CENTER } from './config'

const bingo: number[][] = arrayInit(0)
const card: boolean[][] = arrayInit(false)
card[CENTER][CENTER] = true

const nums = [...new Array(75).keys()].map((num) => num + 1)

shuffle(nums)

for (let i = 0; i < VERTICAL; i++) {
  for (let j = 0; j < HORIZONTAL; j++) {
    bingo[i][j] = nums[i * VERTICAL + j * 1]
  }
}
bingo[CENTER][CENTER] = 0

shuffle(nums)

console.log(bingo)

for (let k = 0; k < nums.length; k++) {
  console.log(`pick up num: ${nums[k]}`)

  bingo.forEach((line, i) =>
    line.forEach((num, j) => (num === nums[k] ? (card[i][j] = true) : null))
  )

  if (judgment(card)) {
    console.log(`bingo!: ${k}`)
    break
  }
}
console.log(bingo, card)
