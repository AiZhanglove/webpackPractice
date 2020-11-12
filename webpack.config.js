const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '输出管理'
        })
    ],
    output: {
        // filename:'bundle.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
};