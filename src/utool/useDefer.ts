import { ref } from 'vue'

export function useDefer(max: number) {
  const count = ref(0)
  let rafID: number = 0
  function run() {
    rafID = requestAnimationFrame(() => {
      count.value += 10
      // 判断是否达到最大值
      if (count.value >= max) {
        cancelAnimationFrame(rafID)
        return
      }
      run()
    })
  }
  run()
  return function defer(n: number) {
    return count.value >= n
  }
}
