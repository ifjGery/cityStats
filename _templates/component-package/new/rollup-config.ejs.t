---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/rollup.config.js
---
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

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
      file: './build/cjs/<%= h.changeCase.camelCase(name) %>.js',
      format: 'cjs',
      banner: 'require(\'./<%= h.changeCase.camelCase(name) %>.css\');',
      strict: false,
    },
    external,
    plugins: [
      postcss({
        extract: true,
        modules: true,
      }),
      typescript(typescriptOptions),
    ],
  },

  // Minified CommonJS
  {
    input,
    output: {
      file: './build/cjs/<%= h.changeCase.camelCase(name) %>.min.js',
      format: 'cjs',
      banner: 'require(\'./<%= h.changeCase.camelCase(name) %>.min.css\');',
      strict: false,
    },
    external,
    plugins: [
      postcss({
        extract: true,
        modules: true,
        minimize: true,
      }),
      typescript(typescriptOptions),
      terser(),
    ],
  },
];
