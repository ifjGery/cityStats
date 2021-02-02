---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/package.json
---
{
    "name": "@ui-component/<%= h.changeCase.paramCase(name) %>",
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
    "main": "build/index.js",
    "types": "build/index.d.ts",
    "files": [
      "build/cjs/*.css",
      "build/cjs/*.js",
      "build/index.d.ts",
      "build/index.js"
    ],
    "dependencies": {
      "postcss-import": "^14.0.0",
      "prop-types": "^15.7.2",
      "react": "^17.0.1",
      "react-dom": "^17.0.1"
    },
    "scripts": {
      "clean": "rm -rf build && mkdir build",
      "build": "npm run clean && cp src/index.d.ts build && cp dist/index.js build && rollup -c && rm -rf build/cjs/<%= h.changeCase.camelCase(name) %>.less"
    },
    "devDependencies": {
      "react-test-renderer": "^17.0.1",
      "rollup-plugin-postcss": "^4.0.0",
      "rollup-plugin-terser": "^7.0.2",
      "@rollup/plugin-typescript": "^8.1.1",
      "@types/prop-types": "^15.7.3",
    }
}
