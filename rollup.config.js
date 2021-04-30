import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';
import { string } from 'rollup-plugin-string';
import image from 'rollup-plugin-img';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: './src/odh-weather-mountain.js',
  output: {
    file:
      process.env.NODE_ENV === 'production'
        ? './dist/odh-weather-mountain.min.js'
        : './work/scripts/odh-weather-mountain.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonJS(),
    string({ include: '**/*.css' }),
    svg(),
    image({
      limit: 10000
    }),
    process.env.NODE_ENV === 'production' &&
      terser({
        mangle: {
          module: true
        }
      }),
    process.env.NODE_ENV === 'production' && cleanup({ comments: 'none' })
  ]
};
