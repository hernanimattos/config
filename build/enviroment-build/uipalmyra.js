const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const user = "appadmin08@cloud.corp";

const uiPalmyra = {
  mode: process.env.NODE_ENV,
  entry: {
    localConfigUpdate: [
      `/home/${user}/mock-palmyra/angular-prestige-theme/angular-prestige-theme.scss`,
    ],
  },
  output: {
    filename: ".[name]",
    path: `/home/${user}/.config/yarn/global/node_modules/@palmyra/angular-prestige-theme/1.4.0/dist/`,
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
      filename: "angular-prestige-theme.min.css",
    }),
  ],
};

module.exports = uiPalmyra;
