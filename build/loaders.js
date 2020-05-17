const { resolve } = require('./utils')

const cacheLoader = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: resolve('.cache-loader') // 缓存文件存放于根目录.cache-loader中
    }
}

const threadLoader = workerParallelJobs => { // 选择几个线程进行编译工作
    const options = { workerParallelJobs }

    Object.assign(options, { poolTimeout: 2000 })

    return { loader: 'thread-loader', options }
}

module.exports = {
    cacheLoader,
    threadLoader
}