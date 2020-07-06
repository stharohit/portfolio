const path = require("path");
const fs = require("fs");
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  setWebpackOptimizationSplitChunks,
} = require("customize-cra");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { getLessVars } = require("antd-theme-generator");
const TerserPlugin = require("terser-webpack-plugin");
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
};

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
      test: /\.js$|\.css$|\.html$|\.jpg$/,
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        chunkSize: 30 * 1024,
        level: 11,
      },
      cache: true,
      deleteOriginalAssets: true,
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
      sourceMap: true, // Must be set to true if using source-maps in production
    })
  ),
  addLessLoader({
    lessOptions: {
      modifyVars: lightVars,
      javascriptEnabled: true,
      sourceMap: true,
    },
  }),
  setWebpackOptimizationSplitChunks({
    cacheGroups: {
      vendor: {
        name: "main_js",
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
      },
      common: {
        test: /[\\/]src[\\/]components[\\/]/,
        chunks: "all",
        minSize: 0,
      },
    },
  })
);
