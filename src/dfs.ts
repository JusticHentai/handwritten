export const dfs1 = (array: any[]) => {
  const dfs = (array: any[]): number => {
    if (!Array.isArray(array)) {
      return 0
    }

    let max = 0

    for (const item of array) {
      const count = dfs(item)
      max = Math.max(max, count)
    }

    return max + 1
  }

  return dfs(array)
}
