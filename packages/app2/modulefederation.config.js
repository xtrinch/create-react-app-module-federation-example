const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  exposes: {
    './routes': './src/routes',
    './App2Index': './src/App',
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
  },
};
