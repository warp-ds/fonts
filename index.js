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
  const nonMinifiedFilename = path.join(outPath, tld) + '.css';
  const minifiedFilename = path.join(outPath, tld) + '.min.css';
  fs.writeFileSync(minifiedFilename, minifiedCss, 'utf-8');
  fs.writeFileSync(nonMinifiedFilename, css, 'utf-8');
}

process('tori-fi');
process('dba-dk');
process('finn-no');
process('blocket-se');