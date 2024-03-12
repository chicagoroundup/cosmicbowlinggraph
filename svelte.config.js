import adapter from '@sveltejs/adapter-static';

const dev = 'production' === 'development';

const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/cosmicbowlinggraph' : ''
		}
	}
};

export default config;
