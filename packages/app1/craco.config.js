const { join } = require("path");
const cracoModuleFederationPlugin = require("craco-mf");
const { ModuleFederationTypesPlugin } = require( '@cloudbeds/webpack-module-federation-types-plugin' );

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationTypesPlugin({
          downloadTypesWhenIdleIntervalInSeconds: 1,
        }),
      ]
    },
    configure: (webpackConfig, { env, paths }) => {
      // this is incorrect for building, but needed for federation types, see https://github.com/cloudbeds/webpack-module-federation-types-plugin/issues/23

      webpackConfig.devServer = { static: {} };
      webpackConfig.devServer.static.directory = join(process.cwd(), "public");
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: cracoModuleFederationPlugin,
    },
  ],
};

