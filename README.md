# getting started

> wechat-square-bracket-emotions 是用来处理微信[XX]类型表情的一个类库

安装
```
npm install --save wechat-square-bracket-emotions
```
引用
```
// es6
import { WxEmotions } from 'wechat-square-bracket-emotions'
// umd
const { WxEmotions } = require("wechat-square-bracket-emotions")
// alias
import { WxEmotions as alias } from 'wechat-square-bracket-emotions'
const alias = require("wechat-square-bracket-emotions").WxEmotions
```
使用
```
const { WxEmotions } = require("wechat-square-bracket-emotions")
const We = new WxEmotions()
// 解析段落
We.parse('你好[微笑]') // "你好<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="['微笑']">"
// 单独解析表情文字
We.textToImage('微笑') // "<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif" alt="[微笑]">"
```

# Usage

## params

### config
```
interface configInterface {
  emotionsMap: {},
  emotionsBaseUrl: string,
  silent: boolean
}
```
+ `emotionsMap` 如果传入该值，则使用自定义的id与表情文字Map
+ `emotionsBaseUrl` 如果传入该值，则使用自定义路径中的gif图片（0.gif - 104.gif）
+ `silent` 默认为true，为false时遇到错误会throw Error

## properties

+ `textToIdMap` getter
+ `idToTextMap` getter
+ `emotionSrcList` getter

## methods

+ `parse`
+ `textToImage`
+ `idToText`

## others

建议使用npm提供的[Try it out](https://runkit.com/npm/wechat-square-bracket-emotions)功能進行试用(需选用node 6)

# Contribution

## dev

npm run dev

## test

npm (run) test

# release
+ 0.1.0 更新（更正）依赖；添加中文关键字
+ 1.0.0 修复部分bug；使用typescript重写src代码
+ 1.0.4 完善打包配置
