# React.js + Typescript + imports with tsconfig path aliases in Parcel.js

This repository tests support in Parcel for tsconfig path aliases in imports.

In particular, aliases specified in `tsconfig.json` are taken into account for
TS checking and compilation, and also for parcel bundling.

Run this to serve a simple Typescript React page.

```sh
npm run serve
```

## Previous version

This repo was created for the purpose of showing https://github.com/zachbryant/parcel-resolver-tspaths/issues/5

In commit dd928bb4e86285802a02584ee9167f35713251eb , with the then-current verion 0.0.7 of `parcel-resolver-tspaths`, it was like this:

> In the current form, the aliases specified in `tsconfig.json` are taken into
account for TS checking and compilation, and aliases defined in `package.json`
are used when bundling.
>
> However, this is a suboptimal situation as it contains a redundancy – either TS
should be able to take `package.json` aliases into account, or the TS-aware
Parcel.js should be able to use `tsconfig.json` paths as it uses `package.json`
aliases.
