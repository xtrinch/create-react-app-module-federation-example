const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  exposes: {
    "./Button": "./src/Button/index",
  },
  filename: "remoteEntry.js",
  remotes: {
    library: "library@http://localhost:3003/remoteEntry.js",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    // 'library': {
    //   singleton: true,
    //   import: '../library',
    //   requiredVersion: require('../library/package.json').version,
    // },
  },
};
