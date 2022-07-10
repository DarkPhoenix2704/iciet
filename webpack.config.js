const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";
const config = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[contenthash].js"
    },
    devServer: {
        open: true,
        historyApiFallback: true, 
        host: "localhost",
        watchFiles:["./src/**/**/**/**/*.{js,jsx,ts,tsx,css}"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, "./index.html"),
            title: "ICIET - 23",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: "babel-loader",
                options: {
                    include: path.resolve(__dirname, "./src")
                },
                exclude: ["/node_modules/"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,"css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.plugins.push(new MiniCssExtractPlugin({filename: "bundle.[contenthash].css"}));        
    } else {
        config.mode = "development";
    }
    return config;
};
