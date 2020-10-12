import OnekitPage from '../baidu2weixin/OnekitPage';
import swan from '../baidu2weixin/swan';
OnekitPage({
    data: {
        appData: getApp().globalData.openParams,
        isWeb: false,
        isFavor: false
    },
    tapChange: function () {
        this.setData({
            isFavor: !this.data.isFavor
        });
    },
    onShow: function () {
        const openParams = this.data.appData;
        if (openParams) {
            swan.reportAnalytics('pageshow', {
                fr: openParams,
                type: 'component',
                name: 'button'
            });
        }
        if ((openParams === 'docWeb')) {
            this.setData('isWeb', true);
        }
        swan.getSystemInfo({
            success: (res) => {
                this.setData('isWeb', (res.platform === 'web'))
            }
        });
    },
    onHide: function () {
        this.data.appData = '';
    },
    submit: function () {
        swan.showToast({
            title: '用户点击了submit',
            icon: 'none'
        });
    },
    reset: function () {
        swan.showToast({
            title: '用户点击了reset',
            icon: 'none'
        });
    },
    tap: function () {
        swan.showToast({
            title: '已点击',
            icon: 'none'
        });
    },
    getUserInfo: function (e) {
        console.log('用户信息:', e);
        if (e.detail.encryptedData) {
            swan.showToast({
                title: '已成功授权',
                icon: 'none'
            });
        }
    },
    openSetting: function (e) {
        console.log('用户设置:', e);
    },
    getPhoneNumber: function (e) {
        console.log('用户手机号:', e);
    },
    contact: function (e) {
        console.log('用户面板:', e);
    },
    chooseInvoiceTitle: function (e) {
        console.log('发票抬头:', e);
    },
    chooseAddress: function (e) {
        console.log('收货地址:', e);
    }
});