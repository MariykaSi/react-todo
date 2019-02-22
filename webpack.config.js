const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackMd5Hash = require("webpack-md5-hash");

const { getIfUtils, removeEmpty } = require("webpack-config-utils");

const resolve = p => path.resolve(__dirname, p);
const { ifProduction, ifDevelopment } = getIfUtils(
  String(process.env.NODE_ENV)
);

module.exports = {
  mode: ifDevelopment("development", "production"),
  devtool: ifDevelopment("source-map"),
  entry: {
    main: ["./src/index.js"],
    vendor: [
      "react",
      "react-dom",
      "prop-types",
      "aphrodite",
      "redux",
      "react-redux"
    ]
  },
  output: {
    filename: ifDevelopment("js/[name].js", "js/[name].[chunkhash].js"),
    chunkFilename: ifDevelopment("js/[name].js", "js/[name].[chunkhash].js"),
    path: resolve("./build"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/react-google-maps)/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: ifDevelopment("img/[name].[ext]", "img/[name].[hash].[ext]")
        }
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader",
        options: {
          name: ifDevelopment("fonts/[name].[ext]", "fonts/[name].[hash].[ext]")
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: { name: "bootstrap" },
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: "vendor",
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin(
      removeEmpty({
        PRODUCTION: JSON.stringify(ifProduction()),
        DEVELOPMENT: JSON.stringify(ifDevelopment()),
        "process.env.NODE_ENV": JSON.stringify(ifProduction("production"))
      })
    ),
    new WebpackMd5Hash()
  ]
};
