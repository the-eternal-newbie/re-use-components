import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/esm/index.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            alias({
                entries: [
                    { find: '~scss/*', replacement: './src/scss/*' },
                    { find: '~utils/*', replacement: './src/utils/*' },
                    { find: '~components/*', replacement: './src/components/*' },
                ],
            }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
            terser(),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
        plugins: [dts.default()],
        external: [/\.(css|less|scss)$/],
    },
];
