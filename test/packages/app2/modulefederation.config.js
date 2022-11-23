const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  exposes: {
    "./Button": "./src/Button",
  },
  filename: "remoteEntry.js",
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
    'shared-library': {
      singleton: true,
      import: '../shared-library',
      requiredVersion: require('../shared-library/package.json').version,
    },
  },
};
