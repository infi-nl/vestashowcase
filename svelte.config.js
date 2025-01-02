import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      // Normally this needs to be tweaked for GH-Pages to use the
      // repository name, because GitHub serves the website as a
      // "folder" on your GH-Pages subdomain. However, we intend to
      // create a DNS record https://vesta.infi.nl or some such
      // so then the site will be served from the root as normal.
      // Thus we leave this option default...
      base: "",
    },
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      precompress: false,
      strict: true
    })

  }
};

export default config;
