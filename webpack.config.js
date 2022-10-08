const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "src/js", "index.js"),
  output: {
    path: resolve(__dirname, "build"),
    filename: "index.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.mp[34]$/,
        loader: "file-loader",
        options: {
          name: "assets/media/[name].[ext]",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              name: "assets/images/[name].[ext]",
              compress: {
                mode: "high",
                disableOnDevelopment: false,
                optipng: {
                  optimizationLevel: 4,
                },
                webp: {
                  quality: 100,
                },
                mozjpeg: {
                  progressive: true,
                  quality: 80,
                },
              },
            },
          },
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 450,
              height: 300,
              fit: "cover",
              quality: 100,
            },
          },
        ],
      },
      {
        test: /\.(gif|svg)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              name: "assets/images/[name].[ext]",
              compress: {
                mode: "low",
                disableOnDevelopment: false,
                svgo: true,
                gifsicle: true, //Почему то gif не сжимается... При любых настройках
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
    }),
  ],
};
