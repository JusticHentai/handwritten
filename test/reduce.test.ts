import reduce from '../src/reduce'

test('测试 src/reduce.ts', () => {
  const arr = [1, 2, 3, 4, 5]

  expect(reduce(arr, (item: number, curr: number) => item + curr, 0)).toBe(15)
})
