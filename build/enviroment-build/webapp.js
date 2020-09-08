const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const user = "appadmin08@cloud.corp";
const webapp = {
  mode: process.env.NODE_ENV,
  entry: {
    config: [`/home/${user}/projects/config/tema/teste/index.scss`],
  },
  output: {
    filename: "[name].js",
    path: `/home/appadmin08@cloud.corp/projects/mock-palmyra/teste`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};

module.exports = webapp;
