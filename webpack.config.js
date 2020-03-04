const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode:"development",
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    },
    //匹配规则
    module: {
        rules: [
            {//cnpm i vue-loader vue-template-compiler -D
                test: /\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|ttf)$/i,
                use: ['file-loader',],
            },

        ],
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
};