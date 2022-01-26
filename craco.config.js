const sassResourcesLoader = require('craco-sass-resources-loader')
const customESLintConfig = require('./.eslintrc')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        // 路径别名
        alias: {
            '@': resolve('src'),
            '@components': resolve('src/components'),
            '@containers': resolve('src/containers'),
            '@services': resolve('src/services'),
            '@scripts': resolve('src/scripts'),
            '@assets': resolve('src/assets'),
        },
    },
    // 配置代理
    devServer: {
        // 配置代理
        proxy: {
            '/api/v2': {
                target: 'https://10.20.1.56', // 目标代理接口地址
                changeOrigin: true,
                secure: false,
                header: {
                    Referer: 'https://10.20.1.56',
                },
            },
            // 图片跨域 pdf查看
            '/media/': {
                target: 'https://10.20.1.56', // 目标代理接口地址
                changeOrigin: false,
                secure: false,
            },
        },
    },
    plugins: [
        {
            plugin: sassResourcesLoader,
            options: {
                resources: [resolve('src/styles/_variables.scss'), resolve('src/styles/_mixins.scss')],
            },
        },
    ],
    eslint: {
        enable: true,
        mode: 'extends',
        configure: () => customESLintConfig,
    },
}
