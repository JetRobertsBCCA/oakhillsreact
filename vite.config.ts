import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';
import { netlifyPlugin } from '@netlify/remix-adapter/plugin';

export default defineConfig({
    plugins: [
        remix({
            // Add these configuration options
            serverModuleFormat: 'esm',
            serverPlatform: 'browser',
            serverBuildTarget: 'browser',
            serverDependenciesToBundle: [
                // Add PayPal-related packages
                '@paypal/checkout-server-sdk',
                '@paypal/react-paypal-js'
            ],
            // Exclude server-only files from client bundle
            ignoredRouteFiles: ['**/*.server.ts', '**/*.server.js'],
            
            // Optional: Add Remix future flags for newer routing behaviors
            future: {
                v3_fetcherPersist: true,
                v3_lazyRouteDiscovery: true,
                v3_relativeSplatPath: true,
                v3_singleFetch: true,
                v3_throwAbortReason: true,
            }
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
