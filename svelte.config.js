/** @type {import('@sveltejs/kit').Config} */
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess({})]
};

export default config;
