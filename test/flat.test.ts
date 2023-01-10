import flat from '../src/flat'

test('测试 src/flat.ts', () => {
  const arr = [1, [[2, 3], 4], 5]

  expect(flat(arr, Infinity)).toEqual([1, 2, 3, 4, 5])
})
