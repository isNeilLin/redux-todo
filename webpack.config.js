var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = {
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body'
}
module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015","react"]
                }
            }
        ]
    },
    devServer: {
        port: 3008,
        inline: true
    },
    plugins: [new htmlWebpackPlugin(htmlWebpackPluginConfig)]
}