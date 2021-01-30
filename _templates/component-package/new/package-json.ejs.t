---
to: packages/ui-components/<%= name %>/package.json
---
{
    "name": "@ui-component/<%= name %>",
    "version": "1.0.0",
    "description": "TODO change",
    "private": true,
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/ifjGery/cityStats.git"
    },
    "bugs": {
      "url": "https://github.com/ifjGery/cityStats/issues"
    },
    "main": "package/index.js",
    "types": "package/index.d.ts",
    "dependencies": {
        "react": "^16.13.1",
        "react-dom": "^16.13.1"
    },
    "scripts": {
      "clean": "rm -rf package && mkdir package",
      "build": "npm run clean && cp src/index.d.ts package && cp dist/index.js package && rollup -c && rm -rf package/commonjs/rpv-drop.less"
    }
}
