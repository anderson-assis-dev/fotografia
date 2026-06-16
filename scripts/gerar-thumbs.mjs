import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PROJETOS_DIR = path.join(process.cwd(), "public", "projetos");
const THUMB_WIDTH = 800;
const THUMB_QUALITY = 80;

async function gerarThumb(fullPath, thumbDir, baseName) {
  fs.mkdirSync(thumbDir, { recursive: true });
  const ext = path.extname(baseName);
  const name = baseName.slice(0, -ext.length);

  await sharp(fullPath)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(path.join(thumbDir, `${name}.webp`));

  await sharp(fullPath)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
    .toFile(path.join(thumbDir, `${name}${ext.toLowerCase()}`));
}

async function run() {
  if (!fs.existsSync(PROJETOS_DIR)) {
    console.log("Nenhuma pasta public/projetos encontrada.");
    return;
  }

  const projetos = fs
    .readdirSync(PROJETOS_DIR)
    .filter((entry) => fs.statSync(path.join(PROJETOS_DIR, entry)).isDirectory());

  let totalGerados = 0;

  for (const slug of projetos) {
    const fullDir = path.join(PROJETOS_DIR, slug, "full");
    if (!fs.existsSync(fullDir)) continue;

    const thumbDir = path.join(PROJETOS_DIR, slug, "thumb");
    const arquivos = fs
      .readdirSync(fullDir)
      .filter((f) => /\.(jpe?g|png)$/i.test(f));

    for (const arquivo of arquivos) {
      await gerarThumb(path.join(fullDir, arquivo), thumbDir, arquivo);
      totalGerados += 1;
    }

    console.log(`✓ ${slug}: ${arquivos.length} thumbnail(s) gerado(s)`);
  }

  console.log(`\nConcluído: ${totalGerados} thumbnails gerados em public/projetos/*/thumb/`);
}

run();
