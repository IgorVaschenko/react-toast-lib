import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import alias from '@rollup/plugin-alias';
import path from 'path';
import image from '@rollup/plugin-image';
import external from 'rollup-plugin-peer-deps-external';

import ReactIs from 'react-is';

const root = path.resolve(__dirname);
const env = process.env.NODE_ENV;

export default {
    input: 'src/index.js',
    output: [
        { format: 'esm', sourcemap: true },
        { format: 'cjs', exports: 'named', sourcemap: true },
    ],
    plugins: [
        resolve({
            browser: true,
            extensions: ['.jsx', '.js'],
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'react-is': Object.keys(ReactIs),
            }
        }),
        alias(
            {
                resolve: ['*', '.js', '.jsx'],
                entries: [{
                    find: '@',
                    replacement: path.resolve(root, './src'),
                }]
            }
        ),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env || 'development')
        }),
        image(),
        terser(),
        babel({
            exclude: './node_modules/**',
            plugins: ['babel-plugin-styled-components']
        }),
        external(),
        (env === 'production')
    ],
    external: ['react', 'react-dom']
}
