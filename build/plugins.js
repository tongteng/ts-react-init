const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin


module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        inject: true
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css'
    }),
    new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
]