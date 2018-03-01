const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'shared'),
    entry: './index.js',
    output: {
        publicPath: '/static/',
        path: path.join(__dirname, 'static/'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    cache: true,
    node: {
        console: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ]
};

module.exports = config;