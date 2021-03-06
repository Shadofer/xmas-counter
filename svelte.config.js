const dev = process.env.NODE_ENV === 'development';

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			out: 'docs',
			assets: 'docs',
			pages: 'docs',
			fallback: null,
			precompress: false
		}),

		prerender: {
			default: true
		},

		paths: {
			base: dev ? '' : '/xmas-counter'
		},

		trailingSlash: 'never'
	}
};

export default config;
