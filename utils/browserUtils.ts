export function getTheme() {}

export function isMobile() {
  let userAgentInfo = navigator.userAgent
  let Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ]
  let getArr = Agents.filter((i) => userAgentInfo.includes(i))
  return getArr.length ? true : false
}

export function copy(content: string) {
  const createInput = document.createElement('textarea')
  createInput.value = content
  document.body.appendChild(createInput)
  createInput.select()
  document.execCommand('Copy')
  createInput.remove()

  // // 判断是否支持copy
  // if (document.queryCommandSupported('copy')) {
  //   // 移除所有的range
  //   window.getSelection().removeAllRanges()
  //   const range = document.createRange()
  //   // 要复制的内容dom节点
  //   range.selectNode(document.getElementById('target'))
  //   window.getSelection().addRange(range)
  //   try {
  //     // 返回true 表示成功
  //     const successful = document.execCommand('copy')
  //   } catch (err) {}
  //   // 移除所有的range
  //   window.getSelection().removeAllRanges()
  // }
}
