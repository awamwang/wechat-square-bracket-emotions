# getting started

> wechat-square-bracket-emotions 是用来处理微信[XX]类型表情的一个类库

安装
```
npm install --save wechat-square-bracket-emotions
```
引用
```
import WxEmotions from 'wechat-square-bracket-emotions'
```
使用
```
var WxEmotions = require("wechat-square-bracket-emotions")
var We = new WxEmotions()
// 解析段落
We.parse('你好[微笑]') // "你好<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt = "['微笑']">"
// 单独解析表情文字
We.textToImage('微笑') // "<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="[微笑]">"
```

# properties

+ `textToIdMap` getter
+ `idToTextMap` getter
+ `emotionSrcList` getter

# methods

+ `parse`
+ `textToImage`
+ `idToText`

# others

建议使用npm提供的[Try it out](https://runkit.com/npm/wechat-square-bracket-emotions)功能進行试用(需选用node 6)