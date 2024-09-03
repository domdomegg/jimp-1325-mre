# jimp-1325-repro

This is a minimal reproducible example demonstrating [bug #1325](https://github.com/jimp-dev/jimp/issues/1325) in Jimp 1.2.0.

## Bug details

When using Create React App, Jimp cannot be loaded in the test environment. This is because of the error:

```
Cannot find module '@jimp/plugin-print/load-font' from 'node_modules/jimp/dist/commonjs/index.js'
```

## Repro setup

This repository was bootstrapped with a clean Create React App setup. We then installed Jimp and added the test [App.test.js](./src/App.test.js).
