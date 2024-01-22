const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function buildLoaders(isProd) {

    const vueLoader = {
        test: /\.vue$/,
        loader: 'vue-loader'
    }

    const scssLoader = {
        test: /\.scss$/,
        use: [
            isProd ? MiniCssExtractPlugin.loader : "vue-style-loader",
            'css-loader',
            'sass-loader'
        ]
    }
    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const babelLoader = {
        test: /\.js$/,
        exclude:
            /node_modules/,
        use:
            {
                loader: "babel-loader",
                options:
                    {
                        presets: ['@babel/preset-env']
                    }
            }
    }


    return [
        vueLoader,
        babelLoader,
        scssLoader,
        assetsLoader
    ]
}


module.exports = buildLoaders