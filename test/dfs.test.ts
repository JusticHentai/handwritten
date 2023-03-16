import { dfs1 } from '../src/dfs'
import nihao from '../src/nihao'

test('测试 src/dfs.ts', () => {
  const arr = [1, [6, [10, [1, [1, [1]]]]], 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]

  expect(dfs1(arr)).toBe(6)
  nihao([
    { name: 'foo', age: 16, city: 'shanghai' },
    { name: 'bar', age: 24, city: 'hangzhou' },
    { name: 'fiz', age: 22, city: 'shanghai' },
    { name: 'baz', age: 19, city: 'hangzhou' },
  ])
    .where((item: any) => item.age > 18)
    .orderBy('age')
    .groupBy('city')
    .execute()
  console.log()
})
