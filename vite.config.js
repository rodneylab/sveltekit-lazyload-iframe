import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@import 'src/lib/styles/variables.scss';"
			}
		}
	},
	plugins: [sveltekit()],
	server: {
		port: 5173,
		strictPort: false
	},
	preview: {
		port: 4173,
		strictPort: false
	}
};

export default config;
