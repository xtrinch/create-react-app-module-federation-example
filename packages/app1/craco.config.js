const { join } = require("path");
const cracoModuleFederationPlugin = require("craco-mf");
const { ModuleFederationTypesPlugin } = require( '@cloudbeds/webpack-module-federation-types-plugin' );

const overrideWebpackConfig = ({ webpackConfig }) => {
  // this is incorrect for building, but needed for federation types, see https://github.com/cloudbeds/webpack-module-federation-types-plugin/issues/23
  webpackConfig.output.path = join(process.cwd(), "public")

  return webpackConfig;
};

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederationPlugin,
    },
    {
      plugin: overrideWebpackConfig
    },
    {
      plugin: new ModuleFederationTypesPlugin({
        downloadTypesWhenIdleIntervalInSeconds: 10,
      }),
    }
  ],
};
