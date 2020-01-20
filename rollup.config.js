import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';
import string from 'rollup-plugin-string';
import image from 'rollup-plugin-img';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: './src/weather_mountain_widget.js',
  output: {
    file:
      process.env.NODE_ENV === 'production'
        ? './dist/weather_mountain_widget.min.js'
        : './work/scripts/weather_mountain_widget.js',
    format: 'iife'
  },
  plugins: [
    string({ include: '**/*.css' }),
    commonJS(),
    resolve(),
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
