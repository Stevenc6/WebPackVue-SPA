const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const rootPath = path.resolve(__dirname);
const distPath = rootPath + "/wwwroot/dist";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: [
        './src/js/app.js',
    ],
    output: {
        clean: true,
        path: distPath,
        publicPath: '/wwwroot/dist',
        filename: '[name].bundle.[contenthash].js',
    },
    resolve: {
        // point bundler to the vue template compiler
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
        },
        // allow imports to omit file exensions, 
        // e.g. "import foo from 'foobar'" instead of "import foo from 'foobar.js'"
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            // use vue-loader plugin for .vue files
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // rule for loading .scss files
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: 'src/index.html',
            inject: true,
            // favicon: 'src/images/favicon.ico',
            /*publicPath: '/wwwroot/dist'*/
            publicPath: "/dist"
        }),
    ]
};