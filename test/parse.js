const { WxEmotions } = require("../dist/index")

// 解析段落
const WE = new WxEmotions()
console.log(WE.parse('你好[微笑]')) // "你好<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="['微笑']">"
