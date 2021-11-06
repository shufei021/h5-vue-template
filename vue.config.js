/*
 * @Description: 项目配置
 * @Author: shufei
 * @Date: 2021-11-04 21:18:01
 * @LastEditTime: 2021-11-06 15:55:53
 * @LastEditors: shufei
 */
'use strict'
const path = require('path') // node.js内置的package，用来处理路径的

const resolve = (dir) => path.join(__dirname, dir) // 处理路径的

// const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'dist', //  生产环境构建文件的目录 默认 dist
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  chainWebpack: (config) => {
    // 开启图片压缩
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
        mozjpeg: {
          progressive: true,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        // ios 不支持
        // webp: {
        //     quality: 75
        // }
      })
      .end()

    // 别名设置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
    // set svg-sprite-loader
    // 第一步：让其他svg loader不要对src/icons进行操作
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    // 第二步：使用svg-sprite-loader 对 src/icons下的svg进行操作
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}

// module.exports = {
//   // publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
//   publicPath: '', // 署应用包时的基本 URL。 vue-router hash 模式使用
//   //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用

//   assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录

//   lintOnSave: '', // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。

//   productionSourceMap: '', // productionSourceMap 置为false，既可以减少包大小，也可以加密源码

//   devServer: {
//     host: '0.0.0.0',
//     disableHostCheck: true, //  新增该配置项
//     port: 9111, // 端口
//     open: false, // 启动后打开浏览器
//     proxy: {

//     },
//     overlay: {
//       //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
//       warnings: false,
//       errors: false
//     }
//   },
//   // css配置
//   css: {
//     extract: '', // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
//     sourceMap: false,
//     loaderOptions: {
//       less: {
//         lessOptions: {
//           modifyVars: {
//             // 直接覆盖变量
//             // 'text-color': 'red',
//             // 'border-color': '#eee'
//             // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
//             hack: `true; @import "${resolve('./src/assets/css/restvant.less')}";`
//           }
//         }
//       },
//       sass: {
//         prependData: `@import "@/assets/css/variables.scss";@import "@/assets/css/mixin.scss";`
//       }
//     }
//   },

//   configureWebpack: config => {
//     config.devtool = 'source-map'
//     Object.assign(config, {
//       name: '应用',
//       externals: IS_PROD || IS_TEST ? externals.build : externals.dev
//     })

//     config.optimization.minimizer = [
//       new ParallelUglifyPlugin({
//         sourceMap: true, // 看情况 生产是否需要打开 优点线上可调式 缺点体积大 谁都可以看到代ma
//         cacheDir: '.cache/', // 设置缓存路径，不改动的调用缓存，第二次及后面build时提速
//         parallel: cpus, // 开启多进程打包 => 只是build 速度提升
//         uglifyJS: {
//           output: {
//             beautify: false, // 压缩更紧凑
//             comments: false // 删除所有注释
//           },
//           // 是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
//           // 不大的警告
//           warnings: false,
//           compress: {
//             drop_console: false, // 删除所有console
//             collapse_vars: true, // 内嵌已定义但只使用一次的变量
//             reduce_vars: true // 提取使用多次但没定义的静态值到变量
//           }
//         }
//       }),
//       new CompressionPlugin({
//         // nginx也要开启！ 否则无效 gzip压缩算法 大概会将文件压缩 60% - 70% 压缩后生产 .gz文件 nginx配置后浏览器会读取.gz文件加载
//         algorithm: 'gzip', // 算法
//         test: new RegExp(
//           '\\.(js|css)$' // 压缩 js 与 css
//         ),
//         threshold: 10240, // 对超过10k的数据压缩
//         deleteOriginalAssets: false // 不删除源文件
//       })
//     ]
//   },
//   chainWebpack: config => {
//     if (IS_PROD || IS_TEST) {
//       // 测试生产环境, 不压缩js代码
//       if (IS_TEST) {
//         config.optimization.minimize(false)
//       }
//       // 打包分析
//       config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
//         {
//           analyzerMode: 'static'
//         }
//       ])
//       // 移除 preload 插件 避免加载多余的资源
//       config.plugins.delete('preload')
//       // 移除 prefetch 插件 避免加载多余的资源
//       config.plugins.delete('prefetch')
//       // 也可单独配置移除预加载的页面

//       config.optimization.splitChunks({
//         chunks: 'all', // 表示将选择哪些块进行优化。提供字符串时，有效值为all、async和initial,默认是仅对异步加载的块进行分割。
//         maxSize: 600000, // 生成的块的最大大小，如果超过了这个限制，大块会被拆分成多个小块。
//         minChunks: 1, // 拆分前必须共享模块的最小块数。
//         maxAsyncRequests: 5, // 按需加载时并行请求的最大数目。
//         maxInitialRequests: 3, // 入口点的最大并行请求数
//         automaticNameDelimiter: '~', // 默认情况下，webpack将使用块的来源和名称（例如vendors~main.js）生成名称。此选项允许您指定要用于生成的名称的分隔符。
//         automaticNameMaxLength: 30, // 允许为SplitChunksPlugin生成的块名称的最大长度
//         cacheGroups: {
//           // 缓存组，将所有加载模块放在缓存里面一起分割打包
//           vendors: {
//             // 自定义打包模块
//             test: /[\\/]node_modules[\\/]/, // 控制此缓存组选择的模块。省略它将选择所有模块。它可以匹配绝对模块资源路径或块名称。匹配块名称时，将选择块中的所有模块。
//             priority: -10 // 一个模块可以属于多个缓存组,模块出现在优先级最高的缓存组中
//           },
//           default: {
//             // 默认打包模块
//             minChunks: 2,
//             priority: -20,
//             reuseExistingChunk: true // 如果当前块包含已经从主包中分离出来的模块，那么该模块将被重用，而不是生成新的模块
//           }
//         }
//       })
//     }
//     // 开启图片压缩
//     config.module
//       .rule('images')
//       .test(/\.(png|jpe?g|gif)(\?.*)?$/)
//       .use('image-webpack-loader')
//       .loader('image-webpack-loader')
//       .options({
//         bypassOnDebug: true,
//         mozjpeg: {
//           progressive: true
//         },
//         optipng: {
//           enabled: false
//         },
//         pngquant: {
//           quality: [0.65, 0.9],
//           speed: 4
//         },
//         gifsicle: {
//           interlaced: false
//         }
//         // ios 不支持
//         // webp: {
//         //     quality: 75
//         // }
//       })
//       .end()

//     // 别名设置
//     config.resolve.alias
//       .set('@', resolve('src'))
//       .set('assets', resolve('src/assets'))
//       .set('api', resolve('src/api'))
//       .set('views', resolve('src/views'))
//       .set('components', resolve('src/components'))

//     // 添加CDN参数到htmlWebpackPlugin配置中
//     config.plugin('html').tap(args => {
//       if (IS_PROD || IS_TEST) {
//         args[0].cdn = cdn.build
//       } else {
//         args[0].cdn = cdn.dev
//       }
//       return args
//     })
//     // set svg-sprite-loader
//     // 第一步：让其他svg loader不要对src/icons进行操作
//     config.module
//       .rule('svg')
//       .exclude.add(resolve('src/icons'))
//       .end()
//       // 第二步：使用svg-sprite-loader 对 src/icons下的svg进行操作
//     config.module
//       .rule('icons')
//       .test(/\.svg$/)
//       .include.add(resolve('src/icons'))
//       .end()
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]'
//       })
//       .end()
//   }
// }
