import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	server: {
		host: '0.0.0.0',
		port: 3000
	},
	resolve: {
		alias: {
				'@': path.resolve(__dirname, './src'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@icons': path.resolve(__dirname, './src/icons'),
				'@utils': path.resolve(__dirname, './src/utils'),
				'@hooks': path.resolve(__dirname, './src/hooks'),
				'@styles': path.resolve(__dirname, './src/styles'),
				'@components': path.resolve(__dirname, './src/components'),
		}
	}
});
