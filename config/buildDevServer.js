

export function buildDevServer() {
    return  {
        port: 7003,
        open: true,
        static: './build',
        /*work only for development*/
        historyApiFallback: true,
        hot: true
    }
}
