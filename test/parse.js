var WxEmotions = require("../dist/index")
var We = new WxEmotions()
// 解析段落
console.log(We.parse('你好[微笑]')) // "你好<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt = "['微笑']">"
