---
to: packages/ui-components/<%= name %>/rollup.config.js
---
import less from 'rollup-plugin-less-modules';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const package = require('./package.json');

const external = [
  ...Object.keys(package.dependencies || {}),
];

const input = './src/index.ts';

const typescriptOptions = {
  removeComments: true,
  module: 'es6',
  target: 'es5',
  jsx: 'react',
  allowSyntheticDefaultImports: true,
  resolveJsonModule: true,
  moduleResolution: 'node'
};

export default [
  // CommonJS
  {
    input,
    output: {
      file: './package/commonjs/<%= name %>.js',
      format: 'cjs',
    },
    external,
    plugins: [
      less({
        output: './package/commonjs/<%= name %>.css',
        sourcemap: false,
      }),
      typescript(typescriptOptions),
    ],
  },

  // Minified CommonJS
  {
    input,
    output: {
      file: './package/commonjs/<%= name %>.min.js',
      format: 'cjs',
    },
    external,
    plugins: [
      less({
        output: './package/commonjs/<%= name %>.css',
        sourcemap: false,
      }),
      typescript(typescriptOptions),
      terser(),
    ],
  },
];
