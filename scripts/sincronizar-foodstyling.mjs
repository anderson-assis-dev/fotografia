import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = path.join(process.cwd(), "foodstyling");
const PUBLIC = path.join(process.cwd(), "public", "fotos-foodstyling");
const FULL = path.join(PUBLIC, "full");
const THUMB = path.join(PUBLIC, "thumb");
const DATA = path.join(process.cwd(), "src", "data", "foodstyling.js");
const THUMB_WIDTH = 800;
const THUMB_QUALITY = 80;

async function processImage(input, output) {
  await sharp(input).rotate().jpeg({ quality: 92 }).toFile(output);
}

async function gerarThumb(fullPath, baseName) {
  const ext = path.extname(baseName);
  const name = baseName.slice(0, -ext.length);
  await sharp(fullPath)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(path.join(THUMB, `${name}.webp`));
  await sharp(fullPath)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
    .toFile(path.join(THUMB, `${name}.jpg`));
}

async function run() {
  if (!fs.existsSync(SRC)) {
    console.log("Pasta foodstyling/ não encontrada.");
    return;
  }
  const arquivos = fs
    .readdirSync(SRC)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !/^share_/i.test(f))
    .sort((a, b) => a.localeCompare(b, "pt-BR"));
  fs.rmSync(PUBLIC, { recursive: true, force: true });
  fs.mkdirSync(FULL, { recursive: true });
  fs.mkdirSync(THUMB, { recursive: true });
  const fotos = [];
  for (let i = 0; i < arquivos.length; i++) {
    const num = String(i + 1).padStart(2, "0");
    const dest = path.join(FULL, `${num}.jpg`);
    await processImage(path.join(SRC, arquivos[i]), dest);
    await gerarThumb(dest, `${num}.jpg`);
    fotos.push(`/fotos-foodstyling/full/${num}.jpg`);
    console.log(`  ${num}.jpg ← ${arquivos[i]}`);
  }
  const conteudo = `export const fotosFoodstyling = ${JSON.stringify(fotos, null, 2)};\n`;
  fs.writeFileSync(DATA, conteudo);
  console.log(`\n✓ ${fotos.length} fotos em public/fotos-foodstyling/ e src/data/foodstyling.js`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
