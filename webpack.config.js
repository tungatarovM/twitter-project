const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              }) },
            {
                  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                  loader: 'url-loader',
                  options: {
                      limit: 10000
                  }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin("style.css")
    ],
    mode: "development"
}