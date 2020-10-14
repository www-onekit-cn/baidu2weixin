/* eslint-disable camelcase */

import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  behaviors: [onekit_behavior, baidu_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    label: {type: String, value: ''},
    name: {type: String, value: ''},
    badgeType: {type: String, value: ''},
    badgeText: {type: String, value: ''},
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(e) {
      const name = this.properties.name
      this.setData({activeName: name})
      this.triggerEvent('change', e)
    }
  }
})
