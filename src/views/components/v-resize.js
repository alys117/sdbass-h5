const map = new WeakMap()
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 运行 entry.target 对应的回调函数
    const handler = map.get(entry.target)
    if (handler) {
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      })
    }
  }
})

export default {
  bind(el, binding) {
    // console.error('bind')
    map.set(el, binding.value)
    ob.observe(el)
  },
  unbind(el) {
    // console.error('unbind')
    ob.unobserve(el)
  }
}

