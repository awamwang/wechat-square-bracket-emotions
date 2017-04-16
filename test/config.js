const { WxEmotions } = require("../dist/index")

// 解析段落
const WE = new WxEmotions()
console.log(WE.config())
console.log(WE.config({
  emotionsBaseUrl: 'http://test.com',
  silent: false
}))
