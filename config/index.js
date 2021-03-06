'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/student':{
        target:'https://api.github.com', //代理地址
        secure: false,  // https 接口为 false  如果是http 则为true
        changeOrigin:true,
        pathRewrite: { //接口区分
          '^/student': ''
        }
      },
      '/teacher':{
        target:'https://api.github.com', //代理地址
        secure: false,  // https 接口为 false  如果是http 则为true
        changeOrigin:true,
        pathRewrite: { //接口区分
          '^/teacher': ''
        }
      }
    },// 开发环境 跨域配置

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,//不使用eslint
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'), //打包后 项目主入口地址

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), //打包生成目录 地址
    assetsSubDirectory: 'static', //静态资源文件目录存放地址
    assetsPublicPath: '/',//打包后是否根目录 如果不是根目录 则对应 服务器文件夹名字

    /**
     * Source Maps
     */

    productionSourceMap: true, //打包是否生成 suorceMap 文件 如果不需要 可以设置为fou
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
