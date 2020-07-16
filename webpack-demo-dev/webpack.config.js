const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bunde.js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    
    devServer:{
        contentBase: './dist'
    },
    plugins: [
            new HtmlWebpackPlugin({title: 'Index File'}),
            new CleanWebpackPlugin({cleanStaeWebpackAssets: false})
    ]
}