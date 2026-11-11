// Erzeugt den Schriftzug „Mit Tieren im Gespräch“ als SVG (Text in Pfade umgewandelt) + PNG.
// Aufruf: node make-logo.cjs <projektordner>
const path = require('path');
const fs = require('fs');
const opentype = require('opentype.js');

const root = process.argv[2];
const req = (m) => require(path.join(root, 'node_modules', m));
const sharp = req('sharp');
const f = (pkg, file) => opentype.loadSync(path.join(root, 'node_modules/@fontsource', pkg, 'files', file));
const CG4 = f('cormorant-garamond', 'cormorant-garamond-latin-400-italic.woff');
const CG5 = f('cormorant-garamond', 'cormorant-garamond-latin-500-italic.woff');
const PIN = f('pinyon-script', 'pinyon-script-latin-400-normal.woff');

const S = 10; // Maßstab: Header-Größen × 10
function build(colors) {
  const line = [
    { font: PIN, size: 21, text: 'Mit', c: colors.main },
    { font: CG5, size: 30, text: 'Tieren', c: colors.gold },
    { font: PIN, size: 20, text: 'im', c: colors.main },
    { font: CG4, size: 30, text: 'Gespräch', c: colors.main },
  ];
  const pad = 2 * S;
  const base1 = pad + 30 * S * 0.8;
  let x = pad;
  const paths = [];
  line.forEach((seg, i) => {
    const size = seg.size * S;
    const p = seg.font.getPath(seg.text, x, base1, size, { kerning: true });
    paths.push({ p, c: seg.c });
    x += seg.font.getAdvanceWidth(seg.text, size, { kerning: true });
    if (i < line.length - 1) {
      const next = line[i + 1];
      x += CG4.getAdvanceWidth(' ', ((seg.size + next.size) / 2) * S);
    }
  });
  const base2 = base1 + 18 * S;
  paths.push({ p: CG4.getPath('Stephanie-Sophia Himmelstoß', pad + 2 * S / 10 * 10 / 5, base2, 14 * S, { kerning: true }), c: colors.name });

  // exakte Begrenzung ermitteln
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  for (const { p } of paths) { const b = p.getBoundingBox(); x1 = Math.min(x1, b.x1); y1 = Math.min(y1, b.y1); x2 = Math.max(x2, b.x2); y2 = Math.max(y2, b.y2); }
  const m = 1.5 * S;
  const vb = [x1 - m, y1 - m, x2 - x1 + 2 * m, y2 - y1 + 2 * m].map((n) => +n.toFixed(1));
  const body = paths.map(({ p, c }) => `<path fill="${c}" d="${p.toPathData(1)}"/>`).join('\n');
  const bg = colors.bg ? `<rect x="${vb[0]}" y="${vb[1]}" width="${vb[2]}" height="${vb[3]}" fill="${colors.bg}"/>\n` : '';
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" width="${vb[2]}" height="${vb[3]}">\n<title>Mit Tieren im Gespräch – Stephanie-Sophia Himmelstoß</title>\n${bg}${body}\n</svg>\n`, w: vb[2] };
}

const out = path.join(root, 'branding', 'logo');
fs.mkdirSync(out, { recursive: true });
const variants = {
  'logo-schriftzug': { main: '#15284a', gold: '#c8963e', name: '#46557a' },
  'logo-schriftzug-hell': { main: '#f9fafb', gold: '#f1bf72', name: '#d5dbe6' },
};
(async () => {
  for (const [name, colors] of Object.entries(variants)) {
    const { svg } = build(colors);
    fs.writeFileSync(path.join(out, name + '.svg'), svg);
    await sharp(Buffer.from(svg), { density: 108 }).png().toFile(path.join(out, name + '.png'));
    console.log('ok', name);
  }
})();
