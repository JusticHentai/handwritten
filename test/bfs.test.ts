import { bfs1, bfs2, bfs3 } from '../src/bfs'

test('测试 src/reduce.ts', () => {
  const data = [
    {
      id: 1,
      name: '前端',
      children: [
        {
          id: 2,
          name: 'html',
          children: [
            { id: 5, name: 'vue', children: [] },
            { id: 6, name: 'react', children: [] },
          ],
        },
        {
          id: 3,
          name: 'css',
          children: [{ id: 7, name: 'c++', children: [] }],
        },
        {
          id: 4,
          name: 'js',
          children: [{ id: 8, name: 'java', children: [] }],
        },
      ],
    },
  ]

  expect(bfs1(data)).toEqual([1, 3, 4])

  const obj = {
    id: 1,
    name: '前端',
    children: [
      {
        id: 2,
        name: 'html',
        children: [
          { id: 5, name: 'vue', children: [] },
          { id: 6, name: 'react', children: [] },
        ],
      },
      {
        id: 3,
        name: 'css',
        children: [{ id: 7, name: 'c++', children: [] }],
      },
      {
        id: 4,
        name: 'js',
        children: [{ id: 8, name: 'java', children: [] }],
      },
    ],
  }

  // @ts-ignore any
  obj.children[0].children[0].children.push(obj)

  const data2 = [obj]
  expect(bfs2(data2)).toEqual([1, 3, 4])

  expect(bfs3(data2, 7)).toEqual('c++')
})
