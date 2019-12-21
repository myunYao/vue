const path = require('path')
const resolve = dir => path.join(__dirname, dir)

// 判断当前环境是否为生产环境：是生产环境的话：如果是直接放在域名的后面则是 / ，否则：例子：放在iview-admin后面则 /iview-admin
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: true,
  publicPath: BASE_URL,
  //   webpack配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  //   打包时不生成.map文件  减少打包的体积同时提高打包速度
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
