const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/scripts/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "src"),
        },
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
};