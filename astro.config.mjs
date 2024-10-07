import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname, relative} from 'node:path';

// https://astro.build/config
export default defineConfig({
	site: 'https://innuendo-studios.netlify.app/',
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true
		}),
		sitemap(),
		icon(),
		// Custom integration for Pagefind using the astro:build:done hook
		{
			name: 'pagefind-integration',
			hooks: {
				'astro:build:done': async ({dir}) => {
					const targetDir = fileURLToPath(dir);
					const cwd = dirname(fileURLToPath(import.meta.url));
					const relativeDir = relative(cwd, targetDir);

					return new Promise(resolve => {
						spawn('npx', ['-y', 'pagefind', '--site', relativeDir], {
							stdio: 'inherit',
							shell: true,
							cwd
						}).on('close', () => resolve());
					});
				}
			}
		}
	]
});
