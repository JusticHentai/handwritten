import { dfs1 } from '../src/dfs'

test('测试 src/dfs.ts', () => {
  const arr = [1, [6, [10, [1, [1, [1]]]]], 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]

  expect(dfs1(arr)).toBe(6)
})
