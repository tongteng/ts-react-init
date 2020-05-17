const { resolve } = require('../utils')
const { cacheLoader, threadLoader } = require('./../loaders')
const MiniCssExtrackPlugin = require('mini-css-extract-plugin').loader

module.exports = [
    {
        test: /\.scss$/,
        use: [
            MiniCssExtrackPlugin,
            cacheLoader,
            threadLoader(),
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: "[local]__[hash:base64:10]"
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [
                        resolve('src/styles')
                    ]
                }
            }
        ]
    },
    // antd样式文件
    {
        test: /\.less$/,
        use: [
            MiniCssExtrackPlugin,
            cacheLoader,
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    },
]