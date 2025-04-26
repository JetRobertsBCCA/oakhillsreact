import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import { netlifyPlugin } from '@netlify/remix-adapter/plugin';

export default defineConfig({
    plugins: [
        remix({
            ignoredRouteFiles: ['**/*.module.scss'],
        }),
        tsconfigPaths(),
        netlifyPlugin(),
    ],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/'),
        },
    },
    define: {
        'import.meta.env.PAYPAL_CLIENT_ID': JSON.stringify(process.env.PAYPAL_CLIENT_ID),
        'import.meta.env.PAYPAL_ENV': JSON.stringify(process.env.PAYPAL_ENV)
    }
});
