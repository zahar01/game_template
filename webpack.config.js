const path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["es2015", "stage-0"]}
                }
            },
        ]
    }
};