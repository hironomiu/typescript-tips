type Data = {
  id: number
  root?: {
    id?: number
    branch?: {
      id?: number
      leaf?: {
        id?: number
        name?: string
      }
    }
  }
}

export const nullishCoalescing = () => {
  const data: Data = {
    id: 1,
  }
  console.log(data.root ?? 'root is null or undefined')
  data.root = {
    id: 10,
  }
  console.log(data.root ?? 'branch is null or undefined')
  console.log(data.root.branch ?? 'branch is null or undefined')
  data.root.branch = {
    id: 100,
  }
  console.log(data.root.branch.leaf ?? 'leaf is null or undefined')
  data.root.branch.leaf = {
    id: 10,
  }
  console.log(data.root.branch.leaf ?? 'leaf is null or undefined')
  console.log(data.root.branch.leaf.name ?? 'leaf.name is null or undefined')
}
