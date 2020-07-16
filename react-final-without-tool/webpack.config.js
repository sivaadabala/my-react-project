const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 4001
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin()
    ]

}