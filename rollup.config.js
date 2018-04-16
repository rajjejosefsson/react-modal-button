import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false,
    },
  ],
  plugins: [
    external(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    postcss({
      minimize: true,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    uglify({}, minify),
  ],
};
