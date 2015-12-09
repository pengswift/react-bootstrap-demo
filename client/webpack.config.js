var path = require("path");
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [ 
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.resolve(__dirname,"dist"),
        publicPath: "/static/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/,      loaders: [ 'react-hot', 'babel' ], exclude: /node_modules/ },
            { test: /\.css$/,       loader: "style!css" },
            { test: /\.less$/,      loader: 'style!css!less'},
            { test: /\.(png|jpg|gif)$/, loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?prefix=font/&limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?prefix=font/" }
        ],
    },
}
