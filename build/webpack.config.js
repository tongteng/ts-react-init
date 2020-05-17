const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const plugins = require('./plugins')
const optimization = require('./optimization')
// 区分生产与开发环境
const isDev = process.env.NODE_ENV === 'development'

/**
 * @type {import('webpack').Configuration}
 */

 module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist/static'),
        // 开发环境不需要使用hash
        filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash].js',
        chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@views': resolve('src/containers/views'),
            '@shared': resolve('src/containers/shared'),
            '@components': resolve('src/containers/components'),
            '@services': resolve('src/services'),
            '@utils': resolve('src/utils'),
        }
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [...plugins],
    module: {
        rules: [...jsRules, ...styleRules]
    },
    // 生产环境暂时不需要sourcemap，需要线上错误监控再说
    devtool: isDev ? 'source-map' : undefined,
    // 开发环境不需要优化打包和压缩代码
    optimization: isDev ? {} : optimization
 }