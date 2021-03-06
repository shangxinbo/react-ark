
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./build')
const server = require('../proxy/index')

module.exports = {
    context: config.appSrc,
    entry: [
        // 开启 React 代码的模块热替换(HMR)
        'react-hot-loader/patch',

        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口
        'webpack-dev-server/client?http://localhost:8080',

        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)
        'webpack/hot/only-dev-server',

        // 我们 app 的入口文件
        config.appIndexJs
    ],
    output: {
        path: config.appBuild,
        filename: 'bundle.js',
        publicPath: '/'
        // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    },

    //如何生成 source map https://doc.webpack-china.org/configuration/devtool/
    devtool: 'inline-source-map',

    //HMR server 
    devServer: {
        hot: true,
        // 开启服务器的模块热替换(HMR)

        contentBase: config.appBuild,
        // 输出文件的路径

        publicPath: '/',
        // 和上文 output 的“publicPath”值保持一致

        proxy: {
            "/api": {
                target: "http://localhost:4009",
                pathRewrite: { "^/api": "" },
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]',
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }
        ],
    },

    plugins: [

        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            title: config.appName,
            favicon: config.appIco,
            inject: true,
            template: config.appHtml,
            hash: true
        }),

        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)
        }),

        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ]
}