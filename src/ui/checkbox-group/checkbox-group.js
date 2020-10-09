// onekit/ui/checkbox-group/checkbox-group.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field-group'],
  options: {  virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      value: ""
    },
    onekitStyle: {
      type: String,
      value: ""
    },
    onekitId: {
      type: String,
      value: ""
    },
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
    checkboxGroup_change(e){
      this.triggerEvent("Change",{})
    }
  }
})