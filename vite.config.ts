import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      preprocess: vitePreprocess(),
      adapter: adapter({
        pages: 'docs',
        assets: 'docs',
        precompress: false,
        strict: true
      }),
      paths: {
        // The custom domain serves the GitHub Pages site from the root.
        base: ''
      }
    })
  ]
});
