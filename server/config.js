
// [rootPathname, useQcloudLogin, cos, serverHost, tunnelServerUrl, tunnelSignatureKey, qcloudAppId, qcloudSecretId, qcloudSecretKey, wxMessageToken].
const CONF = {
    serverHost: 'http://111.231.112.2',
    port: '8899',
    rootPathname: '',
    // 微信小程序 App ID
    appId: 'wx71b9095ab1c56852',
    // 微信小程序 App Secret
    appSecret: '800d2439563462b1f494f76d9f79e81f',
    // 加密token
    wxMessageToken: 'tech997.com',
    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,
    // 
    tunnelServerUrl: '',
    tunnelSignatureKey: '',
    // 腾讯云存储的相关信息 见：https://console.qcloud.com/cos5/bucket/setting?type=filelist&bucketName=piwubang-1257779595&path=%252Ftestupload%252F&region=ap-shanghai
    qcloudAppId: '1258545973', 
    qcloudSecretId: 'AKIDauxn4RwU0xe65LgipsgXsIWgahcq2JVW', 
    qcloudSecretKey: '6kAsY3eCcLmeSwMbPzmJeAQl1NUzEsPe', 
    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        // 172.17.0.13:3360
        host: '172.17.0.13',
        db: 'pwb',
        port: 3360,
        user: 'root',
        pass: 'piwubang@123',
        char: 'utf8mb4'
    },
    cos: {
        /**
         * 区域
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-shanghai',
        // Bucket 名称
        fileBucket: 'piwubang',
        // 文件夹
        uploadFolder: 'upload'
    },
    // 支付配置项
    payconf:{
         appid :     'wx71b9095ab1c56852',
         appsecret : '800d2439563462b1f494f76d9f79e81f',
         mchid :     '1515387251',  //商户号
         mchkey :    'TVU1MO18PS9YQLW58P2SENSEW6O46JIY', // 商户API密码
         wxurl :     'http://www.piwubang.com:8899/weapp/getnotification', // 下单后的通知地址
    },

    // 微信登录态有效期
    wxLoginExpires: 7200
    // wxLoginExpires: 15

}
// console.log(process.env.NODE_ENV);
// module.exports = process.env.NODE_ENV === 'local' ? Object.assign({}, CONF, require('./config.local')) : CONF;
// module.exports = process.env.NODE_ENV === 'local' ? Object.assign({}, CONF) : CONF;
module.exports = CONF ;

