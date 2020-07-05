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
// const AntDesignThemePlugin = require("../../index");
const { getLessVars } = require("antd-theme-generator");

const darkVars = {
  ...getLessVars("./node_modules/antd/lib/style/themes/dark.less"),
};
const lightVars = {
  ...getLessVars("./node_modules/antd/lib/style/themes/compact.less"),
  "@theme": "light",
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
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: lightVars,
    },
  }),
  setWebpackOptimizationSplitChunks({
    cacheGroups: {
      vendor: {
        name: "node_vendors", // part of the bundle name and
        // can be used in chunks array of HtmlWebpackPlugin
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
