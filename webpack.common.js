const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    

module.exports = {
    entry: {
        app: './src/index.js'
    },
    // devServer: {
    //     contentBase: './dist',
    //     hot: true,
    // },
    // module: {
    //     rules:[
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader']
    //         }
    //     ]
    // },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '输出管理'
        })
    ],
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};