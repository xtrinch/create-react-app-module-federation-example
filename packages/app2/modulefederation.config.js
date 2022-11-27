const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  exposes: {
    './App2Index': './src/Homepage',
  },
  filename: "remoteEntry.js",
  remotes: {
    library: `library@${process.env.LIBRARY_URL}/remoteEntry.js`,
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
  },
};
