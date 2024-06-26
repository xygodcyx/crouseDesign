<script setup lang="ts">
const canvas = $ref<HTMLCanvasElement>()!
const ctx = $computed(() => canvas!.getContext('2d')!)
// const WIDTH = 600
// const HEIGHT = 600
interface Point {
  x: number
  y: number
}
interface Branch {
  startPoint: Point
  length: number
  theta: number
}
function init() {
  ctx.strokeStyle = '#fff'
  step({
    startPoint: { x: 0, y: 0 },
    length: Math.random() * 17 + 10,
    theta: -1,
  })
}

onMounted(() => {
  init()
})

function drawBranch(b: Branch) {
  const endPoint = getEndPoint(b)
  lineTo(b.startPoint, endPoint)
}
const paddingTask: Function[] = []
function step(b: Branch, deep: number = 0) {
  const endPoint = getEndPoint(b)
  drawBranch(b)
  if (deep < 5 || Math.random() < 0.4) {
    // leftBranch
    paddingTask.push(() =>
      step({
        startPoint: endPoint,
        length: b.length + Math.random() * 2 - 1,
        theta: b.theta - 0.2 * Math.random(),
      }, deep + 1),
    )
  }
  if (deep < 5 || Math.random() < 0.5) {
    // rightBranch
    paddingTask.push(() => step({
      startPoint: endPoint,
      length: b.length + Math.random() * 2 - 1,
      theta: b.theta + 0.2 * Math.random(),
    }, deep + 1))
  }
}

function lineTo(p1: Point, p2: Point) {
  ctx.beginPath()
  ctx.moveTo(p1.x, p1.y)
  ctx.lineTo(p2.x, p2.y)
  ctx.stroke()
}
function getEndPoint(l: Branch): Point {
  const endPoint = {
    x: l.startPoint.x + l.length * Math.cos(l.theta),
    y: l.startPoint.y - l.length * Math.sin(l.theta),
  }
  return endPoint
}

function frame() {
  const tasks = [...paddingTask]
  paddingTask.length = 0
  tasks.forEach(task => task())
}
let frames = 0
function run() {
  requestAnimationFrame(() => {
    frames++
    if (frames % 3 === 0) {
      frame()
    }
    run()
  })
}
run()
</script>

<template>
  <canvas ref="canvas" width="600" height="600" pos-absolute left-0 right-0 />
</template>
