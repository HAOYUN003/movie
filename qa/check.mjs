// QA 校验器：遍历电影剧情图，检查死路与孤立节点
import { movie } from './script.mjs'

const scenes = movie.scenes
const start = movie.start

const visited = new Set()
const queue = [start]
const allIds = new Set(Object.keys(scenes))

// 反向：哪些场景指向 X
const incoming = {}
for (const id of Object.keys(scenes)) {
  incoming[id] = []
}

let deadEnds = []

while (queue.length) {
  const id = queue.shift()
  if (visited.has(id)) continue
  visited.add(id)
  const s = scenes[id]
  if (!s) { deadEnds.push(`场景不存在: ${id}`); continue }

  const edges = []
  if (s.next) edges.push(s.next)
  if (s.options) s.options.forEach(o => edges.push(o.go))
  if (edges.length === 0) {
    deadEnds.push(`剧情结束(无下一步): ${id}`)
  }
  for (const e of edges) {
    if (!scenes[e]) { deadEnds.push(`指向不存在场景: ${id} -> ${e}`) }
    incoming[e].push(id)
    queue.push(e)
  }
}

// 无法到达的场景
const unreachable = allIds.size - visited.size
const unreachableList = [...allIds].filter(i => !visited.has(i))

console.log('=== QA 校验结果 ===')
console.log(`场景总数: ${allIds.size}`)
console.log(`可达场景: ${visited.size}`)
console.log(`无法到达: ${unreachableList.length}`)
if (unreachableList.length) console.log(`  无法到达场景: ${unreachableList.join(', ')}`)
console.log('---')
if (deadEnds.length === 0) {
  console.log('✓ 无死路，所有分支都能走完')
} else {
  console.log(`发现 ${deadEnds.length} 个死路:`)
  deadEnds.forEach(d => console.log('  ✗ ' + d))
}
console.log('---')
// 检查每个 choice 是否有至少两个选项
const choices = Object.values(scenes).filter(s => s.kind === 'choice' || s.kind === 'memoryCard')
console.log(`交互节点: ${choices.length} 个`)
choices.forEach(c => {
  const ok = c.options && c.options.length >= 2
  console.log(`  ${ok ? '✓' : '✗'} ${c.id}: ${c.options ? c.options.map(o => o.go).join(' | ') : '无选项!'}`)
})
