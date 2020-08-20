// onekit/ui/view/view.js
Component({
  options: {  virtualHost: true
  },
  /**
   * 组件的属性列表
   */
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
    hoverClass:{
      type:String,
      value:""
    },
    hoverStarTime:{
      type:Number,
      value:""
    },
    hoverStayTime:{
      type:Number,
      value:""
    },
    hoverStopPropagation:{
      type:Boolean,
      value:false
    },
    disableScroll:{
      type:Boolean,
      value:false
    },
    hidden:{
      type:Boolean,
      value:false
    },
    disableScroll:{
      type:Object,
      value:{}
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
    view_Tap(e){
      this.triggerEvent("Tap",e)
    }
  }
})
