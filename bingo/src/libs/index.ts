import { VERTICAL, HORIZONTAL } from '../config'

export const arrayInit = <T>(set: T): T[][] =>
  [...new Array(VERTICAL).keys()].map((_) =>
    [...new Array(HORIZONTAL).keys()].map((_) => set)
  )

export const shuffle = (nums: number[]) => {
  const length = nums.length
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
}

export const judgment = (card: boolean[][]): boolean => {
  let result = false
  for (let i = 0; i < VERTICAL; i++) {
    if (
      (card[i][0] && card[i][1] && card[i][2] && card[i][3] && card[i][4]) ||
      (card[0][i] && card[1][i] && card[2][i] && card[3][i] && card[4][i])
    ) {
      result = true
      break
    }
  }
  if (
    (card[0][0] && card[1][1] && card[2][2] && card[3][3] && card[4][4]) ||
    (card[4][0] && card[3][1] && card[2][2] && card[1][3] && card[0][4])
  ) {
    result = true
  }

  return result
}
