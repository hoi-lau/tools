// str -> 零宽字符
export function strToZeroWidth(str: string) {
  return str
    .split('')
    .map((char) => char.charCodeAt(0).toString(2)) // 1 0 空格
    .join(' ')
    .split('')
    .map((binaryNum) => {
      if (binaryNum === '1') {
        return '​' // &#8203;
      } else if (binaryNum === '0') {
        return '‌' // &#8204;
      } else {
        return '‍' // &#8205;
      }
    })
    .join('') // &#8206;
}

// 零宽字符 -> str
function zeroWidthToStr(zeroWidthStr: string) {
  return zeroWidthStr
    .split('') // &#8206;
    .map((char) => {
      if (char === '​') {
        // &#8203;
        return '1'
      } else if (char === '‌') {
        // &#8204;
        return '0'
      } else {
        // &#8205;
        return ' '
      }
    })
    .join('')
    .split(' ')
    .map((binaryNum) => String.fromCharCode(parseInt(binaryNum, 2)))
    .join('')
}
