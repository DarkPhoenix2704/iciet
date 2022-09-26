const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
        port: 3000,
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
                loader: "ts-loader",
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
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|pdf)$/i,
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
        config.optimization = {splitChunks:{chunks:'all'}, minimize: true, minimizer: [new TerserPlugin()]};
        config.plugins.push(new CleanWebpackPlugin());
        config.plugins.push(new MiniCssExtractPlugin({filename: "bundle.[contenthash].css"}));        
    } else {
        config.mode = "development";
    }
    return config;
};
