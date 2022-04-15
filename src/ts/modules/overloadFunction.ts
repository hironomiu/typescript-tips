export function overloadFunction(items: string[]): string[]
export function overloadFunction(items: number[]): number[]
export function overloadFunction(items: string[] | number[]) {
  return items.map((item) => {
    if (typeof item === 'number') {
      return item * 2
    } else if (typeof item === 'string') {
      return `<tag>${item}</item>`
    }
  })
}
