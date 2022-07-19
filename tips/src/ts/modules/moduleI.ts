type RecursiveData =
  | string
  | number
  | RecursiveData[]
  | { [key: string]: RecursiveData }

const recursiveItemData: RecursiveData = [
  {
    category: 'Category',
    child: [
      {
        category: 'CategoryA',
        child: [
          {
            category: 'CategoryAA',
            child: [
              {
                item: 'ItemA',
                price: 500,
              },
            ],
          },
        ],
      },
      {
        category: 'CategoryB',
        child: [
          {
            item: 'ItemB1',
            price: 1500,
          },
          {
            item: 'ItemB2',
            price: 2000,
          },
        ],
      },
    ],
  },
]

// TODO 型
const expandData = (data: any) => {
  data.map((d: any) => {
    console.log(d)
    if (d.child) expandData(d.child)
  })
}

export const moduleI = () => {
  console.log(`---------- moduleI start RecursiveData Type ----------`)
  expandData(recursiveItemData)
  console.log(`---------- moduleI end   ----------`)
}
