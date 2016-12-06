var WxEmotions = require("../dist/index")
var We = new WxEmotions()
// 单独解析表情文字
console.log(We.textToImage('微笑')) // "<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="[微笑]">"