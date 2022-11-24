# craco-mf

Module federation support for CRA5 applications without ejecting and losing update support of react-scripts.

Fork of [hasanayan/craco-module-federation](https://github.com/hasanayan/craco-module-federation), which appears to be unmaintained/abandoned.

## Prerequisites
- Webpack 5
- CRA 5
- CRACO 7
- Node 16+

## Note

This is a fork of the original `craco-module-federation` plugin. Use at your own risk. PRs are welcome; support will be limited.


![](https://img.shields.io/npm/v/craco-mf.svg?style=flat)
![](https://img.shields.io/npm/dt/craco-mf.svg?style=flat)

## Install

```
npm install craco-mf --save-dev
```

## Usage

1. Add the plugin into your craco.config.js
    ```js
    const cracoModuleFederation = require('craco-mf');
    
    module.exports = {
        plugins: [{
            plugin: cracoModuleFederation,
            options: { useNamedChunkIds:true } // THIS LINE IS OPTIONAL
          },
        ]
    }
    ```

2. create a file named `modulefederation.config.js` in the project root. You should export ModuleFederationPlugin constructor options as json from this module. For example;

    ```js
    const deps = require("./package.json").dependencies;
    
    module.exports = {
      name: "app1",
      exposes: {
        "./Button": "./src/Button",
      },
      remotes: {
        app2: "app2@http://localhost:3002/remoteEntry.js",
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
      },
    };
    
    ```

3. Update the scripts section of your package.json as follows:

    ```json
      ...
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "craco:build": "craco build",
        "craco:start": "craco start",
        ...
    ```

## Testing the plugin locally

There are two test apps in this repository inside test folder (app1 and app2). Install their dependencies on them using yarn (`yarn install`) and hit `yarn start` on both of them. When you navigate to app1 it should render the exported button from app2 that says `hello from app2`

## License

Licensed under the MIT License, Copyright ©️ 2022 Brandon Faulkner. See [LICENSE.md](LICENSE) for more information.

Original author [Hasan Ayan](https://github.com/hasanayan)

# Flaws
When building for production, `webpackConfig.output.path = join(process.cwd(), "public")` should not be executed, because the build will end up in the wrong folder, see https://github.com/cloudbeds/webpack-module-federation-types-plugin/issues/23!

# TODO
- wait for response on PR of https://github.com/cloudbeds/webpack-module-federation-types-plugin,
if that is resolved, this could be made into an example repository using the original 
craco-mf + webpack-module-federation-types-plugin.