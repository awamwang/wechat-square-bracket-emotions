const { WxEmotions } = require("../dist/index")

// 单独解析表情文字
const WE = new WxEmotions()
console.log(WE.textToImage('微笑')) // "<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="[微笑]">"