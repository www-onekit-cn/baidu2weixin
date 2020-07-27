// onekit/ui/textarea/textarea.js
Component({
  /**
   * 组件的属性列表
   */
  options: {  virtualHost: true
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    value:{type:String},
    name:{type:String},
    placeholder:{type:String,value:""},
    placeholderStyle :{type:String,value:""},
    placeholderClass :{type:String,value:""},
    disabled :{type:Boolean,value:false},
    maxlength :{type:Number,value:"140"},
    focus :{type:Boolean,value:false},
    autoHeight:{type:Boolean,value:false},
    cursor:{type:Number,value:-1},
    autoFocus:{type:Boolean,value:false},
    fixed:{type:Boolean,value:false},
    cursorSpacing:{type:Number,value:0},
    showConfirmBar:{type:Boolean,value:true},
    selectionStart:{type:Number,value:-1},
    selectionEnd:{type:Number,value:-1},
    adjustPosition:{type:Boolean,value:true},

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

  }
})
