const { WxEmotions } = require("../dist/index")

// 单独解析表情文字
const WE = new WxEmotions({
  silent: true
})
console.log(WE.idToText('3.1')) // 发呆
console.log(WE.idToText(3)) // 发呆
console.log(WE.idToText(300)) // error