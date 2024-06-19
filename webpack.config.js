const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 8001
    },
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin(({template: "./public/index.html"}))
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}