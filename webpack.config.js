/*
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/scripts/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // Очищает директорию dist перед каждой сборкой
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "src"),
        },
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/scripts/index.html",
            filename: "index.html",
        }),
    ],
};*/

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = (process.env.NODE_ENV === "development");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", // Добавляет стили внутрь тега <style> в HTML-файле
                    "css-loader", // Обрабатывает импорты CSS и разрешает url()
                ],
            },
        ],
    },
    devServer: {
        // host: "192.168.1.103", //your ip address
        // port: 8080,
        client: {
            overlay: false,
        },
    },
    entry: {
        main: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    devtool: isDevelopment ? "inline-source-map" : false,
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "index.html"), // входной файл
            filename: "index.html" // название выходного файла
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "./src/assets/assetsOrigin", to: "src/assets/assetsOrigin" },
        //     ]
        // }),
        new CleanWebpackPlugin(),
    ]
};
