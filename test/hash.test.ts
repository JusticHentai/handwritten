import { hash1 } from '../src/hash'

test('测试 src/hash.ts', () => {
  const arr = [8, 1, 2, 3, 4, 5, 6, 7]

  expect(hash1(arr)).toBe(7)
})
