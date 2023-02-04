<template>
  <div class="container">
    <canvas ref="el" :width="WIDTH" :height="HEIGHT" border></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

const el = ref<HTMLCanvasElement>()
const ctx = computed(() => el!.value?.getContext('2d')!)

const WIDTH = 600
const HEIGHT = 600

// 转坐标系
interface Branch {
  start: Point
  length: number,
  theta: number
}

interface Point {
  x: number
  y: number
}

// 入口函数
function init() {
  ctx.value.strokeStyle = '#fff'

  step({
    start: { x: WIDTH / 2, y: HEIGHT },
    length: 40,
    theta: -Math.PI / 2
  })
}

// 缓存队列
const pendingTasks: Function[] = []

// 递归算杈
function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(b)

  if (depth < 2 || Math.random() < 0.5) {
    pendingTasks.push(() => step({
      start: end,
      length: b.length + Math.random() * 10 - 5,
      theta: b.theta - 0.3 * Math.random()
    }, depth + 1))
  }

  if (depth < 2 || Math.random() < 0.5) {
    pendingTasks.push(() => step({
      start: end,
      length: b.length + Math.random() * 10 - 5,
      theta: b.theta + 0.3 * Math.random()
    }, depth + 1))
  }
}

// 深度优先转广度优先
function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach(fn => fn())
}

// 逐帧动画
let framesCount = 0
function startFrame() {
  requestAnimationFrame(() => {
    framesCount++

    if (framesCount % 3 === 0)
      frame()

    startFrame()
  })
}

startFrame()


// 工具函数

function lineTo(p1: Point, p2: Point) {
  ctx.value.beginPath()
  ctx.value.moveTo(p1.x, p1.y)
  ctx.value.lineTo(p2.x, p2.y)
  ctx.value.stroke()
}

function getEndPoint(b: Branch) {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta)
  }
}

function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b))
}

onMounted(() => { init() })
</script>

<style lang="scss" scoped>
.container {
  background-color: black;
}
</style>