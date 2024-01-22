function buildDevServer(port) {
    return  {
        port: port,
        open: true,
        static: './build',
        historyApiFallback: true,
        hot: true
    }
}

module.exports = buildDevServer