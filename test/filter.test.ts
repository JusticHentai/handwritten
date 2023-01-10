import filter from '../src/filter'

test('测试 src/filter.ts', () => {
  const arr = [1, 2, 3, 4, 5]

  expect(filter(arr, (item: number) => !!(item % 2))).toEqual([1, 3, 5])
})
