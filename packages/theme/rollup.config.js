/* eslint-disable no-console */
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
import rpResolve from 'rollup-plugin-node-resolve';

import postcssImport from 'postcss-import';

const pac = require('./package.json');

const external = [
  ...Object.keys(pac.dependencies || {}),
];

const input = './src/index.ts';

const typescriptOptions = {
  removeComments: true,
  module: 'es6',
  target: 'es5',
  jsx: 'react',
  allowSyntheticDefaultImports: true,
  resolveJsonModule: true,
  moduleResolution: 'node',
};

export default [
  // CommonJS
  {
    input,
    output: {
      file: './build/cjs/atomic.js',
      format: 'cjs',
      banner: 'require(\'./atomic.css\');',
      strict: false,
    },
    external,
    plugins: [
      rpResolve(),
      postcss({
        extract: true,
        modules: true,
        use: {
          less: {
            paths: [resolve(__dirname, 'node_modules')],
          },
        },
        plugins: [postcssImport({
          path: ['npm://theme/src'],
        })],
      }),
      typescript(typescriptOptions),
    ],
  },

  // Minified CommonJS
  {
    input,
    output: {
      file: './build/cjs/atomic.min.js',
      format: 'cjs',
      banner: 'require(\'./atomic.min.css\');',
      strict: false,
    },
    external,
    plugins: [
      rpResolve(),
      postcss({
        extract: true,
        modules: true,
        minimize: true,
        use: {
          less: {
            paths: [resolve(__dirname, 'node_modules')],
          },
        },
        plugins: [postcssImport({
          path: ['npm://theme/src'],
        })],
      }),
      typescript(typescriptOptions),
      terser(),
    ],
  },
];
