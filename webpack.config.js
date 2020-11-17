const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require('webpack');
    
console.log( webpack )

module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    devtool: 'inline-source-map', // 映射错误发生的源文件位置
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '输出管理'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    
};