import { defineConfig } from 'vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        assetsInlineLimit: 4096
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    }
})