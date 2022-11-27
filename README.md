# Create-react-app module federation example

This repository represents an example on how to use module federation with apps jumpstarted
by `create-react-app` without ejecting the configuration.

There's three packages in this monorepo:
- `library` (contains shared components)
- `app2` (a standalone app that makes use of components and is also exposed to be used elsewhere)
- `app1` (a container app that makes use of components and also includes app2)

App2 and app1 also contain routing via `react-router-dom` as any real-life react app probably
would.

The two plugins that make this possible:
- https://github.com/bfaulk96/craco-mf
- https://github.com/cloudbeds/webpack-module-federation-types-plugin

`craco-mf` enables us to use module federation, `@cloudbeds/webpack-module-federation-types-plugin`
provides us with typesafe development - meaning our apps are not full of ts-ignores and we have
an automatic system for sharing typings between the apps. This is necessary for any real-world
development scenario.

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