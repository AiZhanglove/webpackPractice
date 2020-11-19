const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },

    // entry: {
    //     index: './src/index.js',
    //     // another: './src/another-module.js'
    //   },
    // entry: './src/index.js',
    // devtool: 'inline-source-map', // 映射错误发生的源文件位置
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'Code Splitting',
            // title: 'Caching',
            title: 'Progressive Web Application'
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' // 指定公共 bundle 的名称。
        // })

        // new HtmlWebpackPlugin({
        //     title: '输出管理'
        // }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // filename:'[name].bundle.js',
        // chunkFilename: '[name].bundle.js',
        // filename: '[name].[chunkhash].js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    // mode: "production", // 压缩文件 --optimize-minimize 标记也会在 webpack 内部调用 UglifyJsPlugin
};

// // ts 写法
// const path = require('path');

// module.exports = {
//     entry: './src/index.ts',
//     devtool: 'inline-source-map',
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js']
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }