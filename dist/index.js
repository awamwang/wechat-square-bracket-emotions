'use strict';

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WxEmotions {
  constructor() {
    let emotionsBaseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/';

    this.emotionsBaseUrl = emotionsBaseUrl;
    this.emotionsCount = 104;
    this.emotions = {
      '0': '微笑',
      '1': '撇嘴',
      '2': '色',
      '3': '发呆',
      '4': '得意',
      '5': '流泪',
      '6': '害羞',
      '7': '闭嘴',
      '8': '睡',
      '9': '大哭',
      '10': '尴尬',
      '11': '发怒',
      '12': '调皮',
      '13': '呲牙',
      '14': '惊讶',
      '15': '难过',
      '16': '酷',
      '17': '冷汗',
      '18': '抓狂',
      '19': '吐',
      '20': '偷笑',
      '21': '可爱',
      '22': '白眼',
      '23': '傲慢',
      '24': '饥饿',
      '25': '困',
      '26': '惊恐',
      '27': '流汗',
      '28': '憨笑',
      '29': '大兵',
      '30': '奋斗',
      '31': '咒骂',
      '32': '疑问',
      '33': '嘘',
      '34': '晕',
      '35': '折磨',
      '36': '衰',
      '37': '骷髅',
      '38': '敲打',
      '39': '再见',
      '40': '擦汗',
      '41': '抠鼻',
      '42': '鼓掌',
      '43': '糗大了',
      '44': '坏笑',
      '45': '左哼哼',
      '46': '右哼哼',
      '47': '哈欠',
      '48': '鄙视',
      '49': '委屈',
      '50': '快哭了',
      '51': '阴险',
      '52': '亲亲',
      '53': '吓',
      '54': '可怜',
      '55': '菜刀',
      '56': '西瓜',
      '57': '啤酒',
      '58': '篮球',
      '59': '乒乓',
      '60': '咖啡',
      '61': '饭',
      '62': '猪头',
      '63': '玫瑰',
      '64': '凋谢',
      '65': '示爱',
      '66': '爱心',
      '67': '心碎',
      '68': '蛋糕',
      '69': '闪电',
      '70': '炸弹',
      '71': '刀',
      '72': '足球',
      '73': '瓢虫',
      '74': '便便',
      '75': '月亮',
      '76': '太阳',
      '77': '礼物',
      '78': '拥抱',
      '79': '强',
      '80': '弱',
      '81': '握手',
      '82': '胜利',
      '83': '抱拳',
      '84': '勾引',
      '85': '拳头',
      '86': '差劲',
      '87': '爱你',
      '88': 'NO',
      '89': 'OK',
      '90': '爱情',
      '91': '飞吻',
      '92': '跳跳',
      '93': '发抖',
      '94': '怄火',
      '95': '转圈',
      '96': '磕头',
      '97': '回头',
      '98': '跳绳',
      '99': '挥手',
      '100': '激动',
      '101': '街舞',
      '102': '献吻',
      '103': '左太极',
      '104': '右太极'
    };
  }

  get emotionsKeys() {
    return (0, _keys2.default)(this.emotions);
  }

  get textToIdMap() {
    let map = new _map2.default();
    this.emotionsKeys.forEach(key => {
      map.set(this.emotions[key], key);
    });
    return map;
  }

  get idToTextMap() {
    let map = new _map2.default();
    this.emotionsKeys.forEach(key => {
      map.set(key, this.emotions[key]);
    });
    return map;
  }

  get emotionSrcList() {
    return this.emotionsKeys.map(id => {
      return `${ this.emotionsBaseUrl }${ id }.gif`;
    });
  }

  static hasEmotionsPattern(message) {
    let openIndex = message.indexOf('[');
    let closeIndex = message.indexOf(']');

    return openIndex > -1 && closeIndex > openIndex;
  }

  parse(message) {
    if (WxEmotions.hasEmotionsPattern(message)) {
      this.emotionsKeys.forEach(key => {
        var emotionText = this.emotions[key];
        var regex = new RegExp('\\[' + emotionText + '\\]', 'g');
        var replacement = `<img src="${ this.emotionsBaseUrl }${ key }.gif" alt = "['${ emotionText }']">`;
        message = message.replace(regex, replacement);
      });
    }
    return message;
  }

  textToImage(text) {
    let id = this.textToIdMap.get(text);
    if (id) {
      return `<img src="${ this.emotionsBaseUrl }${ id }.gif" alt="[${ text }]">`;
    } else {
      return false;
    }
  }

  idToText(id) {
    return this.idToTextMap().get(id);
  }
}
module.exports = WxEmotions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJXeEVtb3Rpb25zIiwiY29uc3RydWN0b3IiLCJlbW90aW9uc0Jhc2VVcmwiLCJlbW90aW9uc0NvdW50IiwiZW1vdGlvbnMiLCJlbW90aW9uc0tleXMiLCJ0ZXh0VG9JZE1hcCIsIm1hcCIsImZvckVhY2giLCJrZXkiLCJzZXQiLCJpZFRvVGV4dE1hcCIsImVtb3Rpb25TcmNMaXN0IiwiaWQiLCJoYXNFbW90aW9uc1BhdHRlcm4iLCJtZXNzYWdlIiwib3BlbkluZGV4IiwiaW5kZXhPZiIsImNsb3NlSW5kZXgiLCJwYXJzZSIsImVtb3Rpb25UZXh0IiwicmVnZXgiLCJSZWdFeHAiLCJyZXBsYWNlbWVudCIsInJlcGxhY2UiLCJ0ZXh0VG9JbWFnZSIsInRleHQiLCJnZXQiLCJpZFRvVGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFVBQU4sQ0FBaUI7QUFDZkMsZ0JBRUU7QUFBQSxRQURBQyxlQUNBLHVFQURrQiw4REFDbEI7O0FBQ0EsU0FBS0EsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjtBQUNkLFdBQUssSUFEUztBQUVkLFdBQUssSUFGUztBQUdkLFdBQUssR0FIUztBQUlkLFdBQUssSUFKUztBQUtkLFdBQUssSUFMUztBQU1kLFdBQUssSUFOUztBQU9kLFdBQUssSUFQUztBQVFkLFdBQUssSUFSUztBQVNkLFdBQUssR0FUUztBQVVkLFdBQUssSUFWUztBQVdkLFlBQU0sSUFYUTtBQVlkLFlBQU0sSUFaUTtBQWFkLFlBQU0sSUFiUTtBQWNkLFlBQU0sSUFkUTtBQWVkLFlBQU0sSUFmUTtBQWdCZCxZQUFNLElBaEJRO0FBaUJkLFlBQU0sR0FqQlE7QUFrQmQsWUFBTSxJQWxCUTtBQW1CZCxZQUFNLElBbkJRO0FBb0JkLFlBQU0sR0FwQlE7QUFxQmQsWUFBTSxJQXJCUTtB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QVksS0FBS1gsZUFBZ0IsS0FBRVcsRUFBRyxpQkFBY2EsSUFBSyxNQUFqRTtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRURFLFdBQVVmLEVBQVYsRUFBYztBQUNaLFdBQU8sS0FBS0YsV0FBTCxHQUFtQmdCLEdBQW5CLENBQXVCZCxFQUF2QixDQUFQO0FBQ0Q7QUFoTGM7QUFrTGpCZ0IsT0FBT0MsT0FBUCxHQUFpQjlCLFVBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV3hFbW90aW9ucyB7XG4gIGNvbnN0cnVjdG9yIChcbiAgICBlbW90aW9uc0Jhc2VVcmwgPSAnaHR0cHM6Ly9yZXMud3gucXEuY29tL21wcmVzL2h0bWxlZGl0aW9uL2ltYWdlcy9pY29uL2Vtb3Rpb24vJ1xuICApIHtcbiAgICB0aGlzLmVtb3Rpb25zQmFzZVVybCA9IGVtb3Rpb25zQmFzZVVybFxuICAgIHRoaXMuZW1vdGlvbnNDb3VudCA9IDEwNFxuICAgIHRoaXMuZW1vdGlvbnMgPSB7XG4gICAgICAnMCc6ICflvq7nrJEnLFxuICAgICAgJzEnOiAn5pKH5Zi0JyxcbiAgICAgICcyJzogJ+iJsicsXG4gICAgICAnMyc6ICflj5HlkYYnLFxuICAgICAgJzQnOiAn5b6X5oSPJyxcbiAgICAgICc1JzogJ+a1geazqicsXG4gICAgICAnNic6ICflrrPnvp4nLFxuICAgICAgJzcnOiAn6Zet5Zi0JyxcbiAgICAgICc4JzogJ+edoScsXG4gICAgICAnOSc6ICflpKflk60nLFxuICAgICAgJzEwJzogJ+WwtOWwrCcsXG4gICAgICAnMTEnOiAn5Y+R5oCSJyxcbiAgICAgICcxMic6ICfosIPnmq4nLFxuICAgICAgJzEzJzogJ+WRsueJmScsXG4gICAgICAnMTQnOiAn5oOK6K62JyxcbiAgICAgICcxNSc6ICfpmr7ov4cnLFxuICAgICAgJzE2JzogJ+mFtycsXG4gICAgICAnMTcnOiAn5Ya35rGXJyxcbiAgICAgICcxOCc6ICfmipPni4InLFxuICAgICAgJzE5JzogJ+WQkCcsXG4gICAgICAnMjAnOiAn5YG356yRJyxcbiAgICAgICcyMSc6ICflj6/niLEnLFxuICAgICAgJzIyJzogJ+eZveecvCcsXG4gICAgICAnMjMnOiAn5YKy5oWiJyxcbiAgICAgICcyNCc6ICfppaXppb8nLFxuICAgICAgJzI1JzogJ+WbsCcsXG4gICAgICAnMjYnOiAn5oOK5oGQJyxcbiAgICAgICcyNyc6ICfmtYHmsZcnLFxuICAgICAgJzI4JzogJ+aGqOeskScsXG4gICAgICAnMjknOiAn5aSn5YW1JyxcbiAgICAgICczMCc6ICflpYvmlpcnLFxuICAgICAgJzMxJzogJ+WSkumqgicsXG4gICAgICAnMzInOiAn55aR6ZeuJyxcbiAgICAgICczMyc6ICflmJgnLFxuICAgICAgJzM0JzogJ+aZlScsXG4gICAgICAnMzUnOiAn5oqY56OoJyxcbiAgICAgICczNic6ICfoobAnLFxuICAgICAgJzM3JzogJ+mqt+mrhScsXG4gICAgICAnMzgnOiAn5pWy5omTJyxcbiAgICAgICczOSc6ICflho3op4EnLFxuICAgICAgJzQwJzogJ+aTpuaxlycsXG4gICAgICAnNDEnOiAn5oqg6by7JyxcbiAgICAgICc0Mic6ICfpvJPmjownLFxuICAgICAgJzQzJzogJ+ezl+Wkp+S6hicsXG4gICAgICAnNDQnOiAn5Z2P56yRJyxcbiAgICAgICc0NSc6ICflt6blk7zlk7wnLFxuICAgICAgJzQ2JzogJ+WPs+WTvOWTvCcsXG4gICAgICAnNDcnOiAn5ZOI5qygJyxcbiAgICAgICc0OCc6ICfphJnop4YnLFxuICAgICAgJzQ5JzogJ+WnlOWxiCcsXG4gICAgICAnNTAnOiAn5b+r5ZOt5LqGJyxcbiAgICAgICc1MSc6ICfpmLTpmaknLFxuICAgICAgJzUyJzogJ+S6suS6sicsXG4gICAgICAnNTMnOiAn5ZCTJyxcbiAgICAgICc1NCc6ICflj6/mgJwnLFxuICAgICAgJzU1JzogJ+iPnOWIgCcsXG4gICAgICAnNTYnOiAn6KW/55OcJyxcbiAgICAgICc1Nyc6ICfllaTphZInLFxuICAgICAgJzU4JzogJ+evrueQgycsXG4gICAgICAnNTknOiAn5LmS5LmTJyxcbiAgICAgICc2MCc6ICflkpbllaEnLFxuICAgICAgJzYxJzogJ+mlrScsXG4gICAgICAnNjInOiAn54yq5aS0JyxcbiAgICAgICc2Myc6ICfnjqvnkbAnLFxuICAgICAgJzY0JzogJ+WHi+iwoicsXG4gICAgICAnNjUnOiAn56S654ixJyxcbiAgICAgICc2Nic6ICfniLHlv4MnLFxuICAgICAgJzY3JzogJ+W/g+eijicsXG4gICAgICAnNjgnOiAn6JuL57OVJyxcbiAgICAgICc2OSc6ICfpl6rnlLUnLFxuICAgICAgJzcwJzogJ+eCuOW8uScsXG4gICAgICAnNzEnOiAn5YiAJyxcbiAgICAgICc3Mic6ICfotrPnkIMnLFxuICAgICAgJzczJzogJ+eTouiZqycsXG4gICAgICAnNzQnOiAn5L6/5L6/JyxcbiAgICAgICc3NSc6ICfmnIjkuq4nLFxuICAgICAgJzc2JzogJ+WkqumYsycsXG4gICAgICAnNzcnOiAn56S854mpJyxcbiAgICAgICc3OCc6ICfmi6XmirEnLFxuICAgICAgJzc5JzogJ+W8uicsXG4gICAgICAnODAnOiAn5byxJyxcbiAgICAgICc4MSc6ICfmj6HmiYsnLFxuICAgICAgJzgyJzogJ+iDnOWIqScsXG4gICAgICAnODMnOiAn5oqx5ouzJyxcbiAgICAgICc4NCc6ICfli77lvJUnLFxuICAgICAgJzg1JzogJ+aLs+WktCcsXG4gICAgICAnODYnOiAn5beu5YqyJyxcbiAgICAgICc4Nyc6ICfniLHkvaAnLFxuICAgICAgJzg4JzogJ05PJyxcbiAgICAgICc4OSc6ICdPSycsXG4gICAgICAnOTAnOiAn54ix5oOFJyxcbiAgICAgICc5MSc6ICfpo57lkLsnLFxuICAgICAgJzkyJzogJ+i3s+i3sycsXG4gICAgICAnOTMnOiAn5Y+R5oqWJyxcbiAgICAgICc5NCc6ICfmgITngasnLFxuICAgICAgJzk1JzogJ+i9rOWciCcsXG4gICAgICAnOTYnOiAn56OV5aS0JyxcbiAgICAgICc5Nyc6ICflm57lpLQnLFxuICAgICAgJzk4JzogJ+i3s+e7sycsXG4gICAgICAnOTknOiAn5oyl5omLJyxcbiAgICAgICcxMDAnOiAn5r+A5YqoJyxcbiAgICAgICcxMDEnOiAn6KGX6IieJyxcbiAgICAgICcxMDInOiAn54yu5ZC7JyxcbiAgICAgICcxMDMnOiAn5bem5aSq5p6BJyxcbiAgICAgICcxMDQnOiAn5Y+z5aSq5p6BJ1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbW90aW9uc0tleXMgKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVtb3Rpb25zKVxuICB9XG5cbiAgZ2V0IHRleHRUb0lkTWFwICgpIHtcbiAgICBsZXQgbWFwID0gbmV3IE1hcCgpXG4gICAgdGhpcy5lbW90aW9uc0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBtYXAuc2V0KHRoaXMuZW1vdGlvbnNba2V5XSwga2V5KVxuICAgIH0pXG4gICAgcmV0dXJuIG1hcFxuICB9XG5cbiAgZ2V0IGlkVG9UZXh0TWFwICgpIHtcbiAgICBsZXQgbWFwID0gbmV3IE1hcCgpXG4gICAgdGhpcy5lbW90aW9uc0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBtYXAuc2V0KGtleSwgdGhpcy5lbW90aW9uc1trZXldKVxuICAgIH0pXG4gICAgcmV0dXJuIG1hcFxuICB9XG5cbiAgZ2V0IGVtb3Rpb25TcmNMaXN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbW90aW9uc0tleXMubWFwKChpZCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3RoaXMuZW1vdGlvbnNCYXNlVXJsfSR7aWR9LmdpZmBcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGhhc0Vtb3Rpb25zUGF0dGVybiAobWVzc2FnZSkge1xuICAgIGxldCBvcGVuSW5kZXggPSBtZXNzYWdlLmluZGV4T2YoJ1snKVxuICAgIGxldCBjbG9zZUluZGV4ID0gbWVzc2FnZS5pbmRleE9mKCddJylcblxuICAgIHJldHVybiAob3BlbkluZGV4ID4gLTEgJiYgY2xvc2VJbmRleCA+IG9wZW5JbmRleClcbiAgfVxuXG4gIC8qKlxuICAgKiDmiorlrZfnrKbkuLLkuK3nmoTooajmg4XmloflrZfmm7/mjaLmiJDooajmg4Xlm77niYdcbiAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBwYXJzZSAobWVzc2FnZSkge1xuICAgIGlmIChXeEVtb3Rpb25zLmhhc0Vtb3Rpb25zUGF0dGVybihtZXNzYWdlKSkge1xuICAgICAgdGhpcy5lbW90aW9uc0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBlbW90aW9uVGV4dCA9IHRoaXMuZW1vdGlvbnNba2V5XVxuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdcXFxcWycgKyBlbW90aW9uVGV4dCArICdcXFxcXScsICdnJylcbiAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gYDxpbWcgc3JjPVwiJHt0aGlzLmVtb3Rpb25zQmFzZVVybH0ke2tleX0uZ2lmXCIgYWx0ID0gXCJbJyR7ZW1vdGlvblRleHR9J11cIj5gXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UocmVnZXgsIHJlcGxhY2VtZW50KVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2VcbiAgfVxuXG4gIHRleHRUb0ltYWdlICh0ZXh0KSB7XG4gICAgbGV0IGlkID0gdGhpcy50ZXh0VG9JZE1hcC5nZXQodGV4dClcbiAgICBpZiAoaWQpIHtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMuZW1vdGlvbnNCYXNlVXJsfSR7aWR9LmdpZlwiIGFsdD1cIlske3RleHR9XVwiPmBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWRUb1RleHQgKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRUb1RleHRNYXAoKS5nZXQoaWQpXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gV3hFbW90aW9uc1xuIl19