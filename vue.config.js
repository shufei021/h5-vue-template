/*
 * @Description: 项目配置
 * @Author: shufei
 * @Date: 2021-11-04 21:18:01
 * @LastEditTime: 2021-11-14 21:30:06
 * @LastEditors: shufei
 */
'use strict'
const path = require('path') // node.js内置的package，用来处理路径的
const resolve = dir => path.join(__dirname, dir) // 处理路径的
const CompressionPlugin = require('compression-webpack-plugin') // 开启gzip压缩 nginx也要开启才可以生效 nginx.conf  开启后浏览器会读取.gz文件
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin') // 开启多线程打包并压缩
const IS_PRO = process.env.NODE_ENV === 'production'
const cpus = require('os').cpus().length // node自带模块 查看本机有多少cpus 就开启多少线程并行打包

module.exports = {
  publicPath: '/',
  outputDir: 'dist', //  生产环境构建文件的目录 默认 dist
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  configureWebpack: config => {
    config.devtool = 'source-map'

    config.optimization.minimizer = [
      new ParallelUglifyPlugin({
        sourceMap: true, // 看情况 生产是否需要打开 优点线上可调式 缺点体积大 谁都可以看到代ma
        cacheDir: '.cache/', // 设置缓存路径，不改动的调用缓存，第二次及后面build时提速
        parallel: cpus, // 开启多进程打包 => 只是build 速度提升
        uglifyJS: {
          output: {
            beautify: false, // 压缩更紧凑
            comments: false // 删除所有注释
          },
          // 是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
          // 不大的警告
          warnings: false,
          compress: {
            drop_console: false, // 删除所有console
            collapse_vars: true, // 内嵌已定义但只使用一次的变量
            reduce_vars: true // 提取使用多次但没定义的静态值到变量
          }
        }
      }),
      new CompressionPlugin({
        // nginx也要开启！ 否则无效 gzip压缩算法 大概会将文件压缩 60% - 70% 压缩后生产 .gz文件 nginx配置后浏览器会读取.gz文件加载
        algorithm: 'gzip', // 算法
        test: new RegExp(
          '\\.(js|css)$' // 压缩 js 与 css
        ),
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      })
    ]
  },
  chainWebpack: config => {
    // 开启图片压缩
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
    config.module
      .rule('images')
      .test(/\.(png|jpg|jpeg|gif)$/)
      .use('url-loader')
      .loader('url-loader')
      .options({ limit: 10000 })
      .end()

    // 别名设置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('images', resolve('src/assets/images'))
      .set('components', resolve('src/components'))
      // set svg-sprite-loader
    // 第一步：让其他svg loader不要对src/icons进行操作
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    // 第二步：使用svg-sprite-loader 对 src/icons下的svg进行操作
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // css配置
  css: {
    extract: IS_PRO, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': 'red',
            // 'border-color': '#eee'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${resolve('./src/assets/css/restvant.less')}";`
          }
        }
      },
      sass: {
        prependData: `@import "@/assets/css/variables.scss";@import "@/assets/css/mixin.scss;@import "@/assets/css/index.scss";`
      }
    }
  },
  devServer: {
    // development server port 8000
    port: 8000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api1': {
        target: 'http://www.baidu.com',
        ws: false,
        changeOrigin: true,
        // logLevel: 'debug',
        pathRewrite: { // 本地服务联调时需要放开此项配置
          // '^/customer-service': 'customer-service'
        }
      }
    }
  }
}
