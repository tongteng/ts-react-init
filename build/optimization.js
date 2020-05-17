const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    runtimeChunk: {
        name: 'manifest'
    },
    splitChunks: {
        cacheGroups: {
            default: false,
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'commons',
                chunks: 'initial'
            },
            // antd单独打包
            antd: {
                name: 'antd',
                test: /[\\/]node_modules[\\/](antd)[\\/]/,
                chunks: 'all',
                priority: 9
            },
            vendor: {
                name: 'vendor',
                test: /[\\/]node_modules[\\/](moment|axios)[\\/]/, // antd内包含moment，将其和axios单独打包成一个文件
                chunks: 'all',
                priority: 10
            }
        }
    },
    minimizer: [
        new TerserPlugin({
            // 启用缓存
            cache: true,
            // 多线程进行
            parallel: true
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'), // 自带的css压缩器
            cssProcessorOptions: { safe: true, autoprefixer: false, discardComments: { removeAll: true } },
            canPrint: true // 将压缩过程打印到控制台
        })
    ]
}