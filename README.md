# Create-react-app module federation example

The motivation for this repository is to enable us to use multiple separate builds to 
form a single application seamlessly, with as little configuration as possible.

This repository represents an example on how to use module federation with apps jumpstarted
by `create-react-app` without ejecting the configuration.

There's very little configuration involved. There is however two important files in each repository:
- `modulefedration.config.js` 

This is webpack's module federation config, see https://webpack.js.org/concepts/module-federation
for more information. Module federation enables us to use multiple separate builds to form a single
application.

- `craco.config.js` 

Craco is the Create React App Configuration Override, an easy and comprehensible configuration layer
for create-react-app. This is the config for it to enable us to add plugins, see https://github.com/dilanx/craco.

The two webpack plugins that make this possible:
- https://github.com/bfaulk96/craco-mf

`craco-mf` enables us to use module federation in our CRA application.

- https://github.com/cloudbeds/webpack-module-federation-types-plugin

`@cloudbeds/webpack-module-federation-types-plugin`
provides us with typesafe development - meaning our apps are not full of ts-ignores and we have
an automatic system for sharing typings between the apps. This is necessary for any real-world
development scenario.

In the `modulefederation.config.js` you configure which packages are shared between the different apps,
which components are exposed to other apps and which other apps we wish to reach in our app and where
they reside.

Example for an app that uses a library build and is exposed to another container app:
```
{
  name: "app2",
  exposes: {
    './App2Index': './src/Homepage',
  },
  filename: "remoteEntry.js",
  remotes: {
    library: "library@http://localhost:3003/remoteEntry.js",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
}
```

There's three packages in this monorepo:
- `library` (contains shared components)
- `app2` (a standalone app that makes use of components and is also exposed to be used elsewhere)
- `app1` (a container app that makes use of components and also includes app2)

App2 and app1 also contain routing via `react-router-dom` as any real-life react app probably
would.

## Running in development

In development, the app is ran with `lerna`, which will run `yarn run start` in each
of the packages. Each of the apps can also be ran individually by running `yarn run start`
in their respective folders (Provided you have also ran their dependencies, e.g. you need
to run `library` to run `app2`).

To start the app with lerna:
`yarn run start`

## Building for production

Production setup is prepared using docker & docker-compose. In this setup, each of the
apps is served as a static production build served behind `nginx`.

`docker-compose up`