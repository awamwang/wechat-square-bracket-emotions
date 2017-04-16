const { WxEmotions } = require("../dist/index.js")

const WE = new WxEmotions()
console.log(WE.emotionsIds)
console.log(WE.textToIdMap)
console.log(WE.idToTextMap)
console.log(WE.emotionSrcList)
