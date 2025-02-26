import fs from 'node:fs'
import path from 'node:path';
import { minify } from './css-minify.js'
import drnm from 'drnm';

const __dirname = drnm(import.meta.url)
const outPath = path.join(__dirname, './dist')
fs.mkdirSync(outPath, { recursive: true })

function process(tld) {
  const css = fs.readFileSync(`./${tld.split('-')[0]}/${tld}.css`)
  const minifiedCss = minify(css);
  const filename = path.join(outPath, tld) + '.css';
  const deprecatedFilename = path.join(outPath, tld) + '.min.css'; // Remove when no apps use {brand}.min.css
  fs.writeFileSync(filename, minifiedCss, 'utf-8');
  fs.writeFileSync(deprecatedFilename, minifiedCss, 'utf-8');
}

process('tori-fi');
process('dba-dk');
process('finn-no');
process('blocket-se');
process('neutral-com');