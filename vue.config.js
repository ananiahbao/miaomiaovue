module.exports =  {
    // 将所有的静态文件都放在miaomiao文件夹下
    publicPath : '/miaomiao',
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}