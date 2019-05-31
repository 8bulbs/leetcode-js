const nodes = [
  [                  'a'                 ],
  [        'b',                 'c'      ],
  [   'd',      'e',      'f',      'g'  ],
  ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'] 
]
// 如上数组
// 'a'节点的子节点为'b'和'c'
// 'b'节点的子节点为'd'和'e', 'c'节点的子节点为'f'和'g'
// 'd'节点的子节点为'h'和'i', 'e'节点的子节点为'j'和'k'
// 以此类推
// 当我们从根节点'a'逐级向下遍历节点时
// 创建当前节点和它的子节点按照深度组成的二维数组
// 例: 如果当前节点是 'b'
// 所需创建的二维数组如下
// [
//  [        'b'       ]
//  [   'd',      'e'  ]
//  ['h', 'i', 'j', 'k']
// ]

const tree = {
  "a": {
    "parent": "",
    "children": ["b", "c"]
  },
  "b": {
    "parent": "a",
    "children": ["d", "e"]
  },
  "c": {
    "parent": "a",
    "children": ["f", "g"]
  },
  "d": {
    "parent": "b",
    "children": ["h", "i"]
  },
  "e": {
    "parent": "b",
    "children": ["j", "k"]
  },
  "f": {
    "parent": "c",
    "children": ["l", "m"]
  },
  "g": {
    "parent": "c",
    "children": ["n", "o"]
  },
}

// tranform_tree_to_double_dimensional_array
function t2dda (tree, currentNodeId) {
  if (tree[currentNodeId].children.length) {
    const res = [
      [currentNodeId]
    ]
    let deepth = 0
    res[++deepth] = []
    func(deepth, currentNodeId)
    function func (deepth, optionNodeId) {
      const children = tree[currentNodeId].children
      children.forEach(child => {
        console.warn('res', res)
        console.warn('deepth', deepth)
        console.warn('currentNodeId', currentNodeId)
        res[deepth].push(child)
        // 如果d或者e有子节点
        if (tree[child].children.length) {
          // 而且第三级数组是undefined, 则创建第三级空数组
          if (!res[deepth + 1]) {
            console.warn('创建第三级空数组')
            res[++deepth] = []
            func(deepth, child)
          } else {
            func(deepth, child)
          }
        }
      })
  }
  }
  return res
}

console.log(t2dda(tree, 'b'))