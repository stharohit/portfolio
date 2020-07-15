const path = require("path");
const fs = require("fs");
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  setWebpackOptimizationSplitChunks,
  addWebpackAlias,
  addWebpackModuleRule,
} = require("customize-cra");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { getLessVars } = require("antd-theme-generator");
const TerserPlugin = require("terser-webpack-plugin");
var ProgressPlugin = require("webpack/lib/ProgressPlugin");
const LessPluginCleanCSS = require("less-plugin-clean-css");
const darkVars = {
  ...getLessVars("./node_modules/antd/lib/style/themes/dark.less"),
};
const lightVars = {
  ...getLessVars("./node_modules/antd/lib/style/themes/compact.less"),
};
fs.writeFileSync("./src/dark.json", JSON.stringify(darkVars));
fs.writeFileSync("./src/light.json", JSON.stringify(lightVars));

const options = {
  stylesDir: path.join(__dirname, "./src"),
  antDir: path.join(__dirname, "./node_modules/antd"),
  varFile: path.join(__dirname, "./src/App.less"),
  themeVariables: Array.from(
    new Set([...Object.keys(darkVars), ...Object.keys(lightVars)])
  ),
  generateOnce: false, // generate color.less on each compilation
  minify: true,
};

const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackPlugin(new AntDesignThemePlugin(options)),
  addWebpackPlugin(
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.jpg$|\.less$/,
      threshold: 10240,
      minRatio: 0.8,
      cache: true,
    })
  ),
  process.env.NODE_ENV === "development" &&
    addWebpackPlugin(
      new ProgressPlugin({
        handler: (percentage, msg) => {
          let print = "";

          for (let i = 0; i < 100; i++) {
            if (i <= Math.round(percentage * 100)) {
              print = print + "=";
            } else {
              print = print + "_";
            }
          }
          console.clear();
          console.log(msg + "\n");
          console.log(
            "[ " +
              print +
              " ] \n => Completion percentage: " +
              (percentage * 100).toFixed(2) +
              "%"
          );
        },
      })
    ),
  addWebpackPlugin(
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      cache: true,
      parallel: true,
    })
  ),
  addLessLoader({
    lessOptions: {
      modifyVars: lightVars,
      javascriptEnabled: true,
      sourceMap: true,
      plugins: [new LessPluginCleanCSS({ advanced: true })],
    },
  }),
  setWebpackOptimizationSplitChunks({
    cacheGroups: {
      vendor: {
        name: "customBundle",
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
      },
      common: {
        test: /[\\/]src[\\/]components[\\/]/,
        chunks: "all",
        minSize: 0,
      },
    },
  }),
  addWebpackModuleRule({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: {
      test: /\.jsx?$/,
    },
    use: ["babel-loader", "@svgr/webpack", "url-loader"],
  }),
  addWebpackModuleRule({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader",
  }),
  addWebpackModuleRule({
    test: /\.(png|jpg|gif|pdf)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  }),
  addWebpackAlias({
    "react-dom": "@hot-loader/react-dom",
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
);
