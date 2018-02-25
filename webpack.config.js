const path = require('path');

const config = {
    entry: './client.js',
    output: {
        path: path.join(__dirname, 'static/'),
        filename: 'bundle.js
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
            }
        ],
    }
};

module.exports = config;