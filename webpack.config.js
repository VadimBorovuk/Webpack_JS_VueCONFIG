const webpackBuild = require("./config/webpackBuild");
const path= require("path");

module.exports = (env) => {

    return webpackBuild({
        mode: env.mode ?? 'development',
        port: env.port ?? 3007,
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            entry: path.resolve(__dirname, 'src', 'index.js'),
            output: path.resolve(__dirname, 'build'),
            public: path.resolve(__dirname, 'public'),
            src: path.resolve(__dirname, 'src')
        },
    })
};