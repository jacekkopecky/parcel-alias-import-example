# React.js + Typescript + imports with tsconfig path aliases in Parcel.js

This repository tests support in Parcel for tsconfig path aliases in imports.

Run this to serve a simple Typescript React page.

```sh
npm run serve
```

In the current form, the aliases specified in `tsconfig.json` are taken into
account for TS checking and compilation, and aliases defined in `package.json`
are used when bundling.

However, this is a suboptimal situation as it contains a redundancy – either TS
should be able to take `package.json` aliases into account, or the TS-aware
Parcel.js should be able to use `tsconfig.json` paths as it uses `package.json`
aliases.
