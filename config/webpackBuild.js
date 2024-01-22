const buildDevServer = require("./buildDevServer")
const buildResolves = require("./buildResolves")
const buildLoaders = require("./buildLoaders")
const buildPlugins = require("./buildPlugins")

function webpackBuild({mode, paths, port}) {

    const isProd = mode === 'production'

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path:  paths.output,
            clean: true
        },
        devtool: !isProd ? 'inline-source-map' : 'source-map',
        devServer: buildDevServer(port),
        resolve: buildResolves(paths.src),
        module: {
            rules: buildLoaders(isProd)
        },
        plugins: buildPlugins({mode, paths})
    }

}

module.exports = webpackBuild