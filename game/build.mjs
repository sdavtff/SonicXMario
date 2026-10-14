// Bundles the game into android/app/src/main/assets/www (also used for browser tests).
import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'android', 'app', 'src', 'main', 'assets', 'www');
mkdirSync(out, { recursive: true });
const dev = process.argv.includes('--dev');
await esbuild.build({
  entryPoints: [join(here, 'src', 'main.js')],
  bundle: true,
  minify: !dev,
  sourcemap: dev ? 'inline' : false,
  format: 'iife',
  target: ['chrome80'],
  outfile: join(out, 'game.js'),
  legalComments: 'eof',
  logLevel: 'info',
});
copyFileSync(join(here, 'index.html'), join(out, 'index.html'));
copyFileSync(join(here, 'style.css'), join(out, 'style.css'));
console.log('Bundle written to', out);
