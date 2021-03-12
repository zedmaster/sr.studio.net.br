const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withVideos = require('next-videos');
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");


module.exports = withPlugins([[withSass], [withImages],[withVideos]], {
  trailingSlash: true,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
