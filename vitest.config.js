import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
    publicDir: false,
    build: {
        manifest: true
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js')
        }
    },
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            reportsDirectory: './tests/Frontend/coverage',
            include: ['resources/js/**/*.{js,jsx,ts,tsx}'],
            exclude: ['node_modules', 'vendor', '**/*.min.js']
        }
    }
}))
