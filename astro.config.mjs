import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
    site: 'https://dhirajgagrai.dev',
    integrations: [sitemap()],
    output: 'static',
    adapter: vercel({
        analytics: true,
      }),
});
