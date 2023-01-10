import map from '../src/map'

test('测试 src/map.ts', () => {
  const arr = [1, 2, 3, 4, 5]

  expect(map(arr, (item: number, i: number) => item + i)).toEqual([
    1, 3, 5, 7, 9,
  ])
})
