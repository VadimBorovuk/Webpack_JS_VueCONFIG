const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: './src/index.js',
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        // devtool: isDev ? 'inline-source-map' : 'source-map',
        devServer: {
            port: 3003,
            open: true,
            static: './build',
            /*work only for development*/
            historyApiFallback: true,
            hot: true
        },
        resolve: {
            extensions: ['.vue', '.js'],
            // alias: {
            //     '@': options.paths.src
            // },
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                favicon: path.resolve(__dirname, 'public', 'favicon.ico')
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:5].css",
                chunkFilename: "css/[name].[contenthash:5].css",
            })
        ]
    }
};