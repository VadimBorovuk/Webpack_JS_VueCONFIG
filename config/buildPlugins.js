const {VueLoaderPlugin} = require("vue-loader");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

function buildPlugins({mode, paths}) {

    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const plugins = [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: paths.favicon
        }),

        new webpack.DefinePlugin(
            {
                ENV_DEVELOPMENT: JSON.stringify('development')
            }
        )
    ]

    // if(isDev){
    //     plugins.push(new webpack.ProgressPlugin())
    // }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "css/[name].[contenthash:5].css",
        }))
        plugins.push(new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(paths.public, 'locales'),
                    to: path.resolve(paths.output, 'locales')
                }
            ]
        }))
    }



    return plugins
}

module.exports = buildPlugins