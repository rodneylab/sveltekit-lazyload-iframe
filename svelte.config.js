/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import 'src/lib/styles/variables.scss';"
      }
    })
  ]
};

export default config;
