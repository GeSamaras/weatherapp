const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, 
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
}