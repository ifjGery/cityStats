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
    "main": "pac/index.js",
    "types": "pac/index.d.ts",
    "dependencies": {
      "react": "^17.0.1",
      "react-dom": "^17.0.1"
    },
    "scripts": {
      "clean": "rm -rf pac && mkdir pac",
      "build": "npm run clean && cp src/index.d.ts pac && cp dist/index.js pac && rollup -c && rm -rf pac/commonjs/<%= h.inflection.camelize(name) %>.less"
    },
    "devDependencies": {
      "react-test-renderer": "^17.0.1",
      "rollup-plugin-postcss": "^4.0.0",
      "rollup-plugin-terser": "^7.0.2",
      "@rollup/plugin-typescript": "^8.1.1"
    }
}
