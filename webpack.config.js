const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');
    

module.exports = {
    entry: {
        index: './src/index.js',
        // another: './src/another-module.js'
      },
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
            title: 'Code Splitting'
          }),
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
        filename:'[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    // mode: "production", // 压缩文件 --optimize-minimize 标记也会在 webpack 内部调用 UglifyJsPlugin
};