import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.join(process.cwd(), "drive-download-20260617T102902Z-3-001");
const DEST_DIR = path.join(process.cwd(), "public", "projetos", "melhores-trabalhos", "full");
const MAX_WIDTH = 1920;
const QUALITY = 85;

// Remove duplicatas por tamanho de arquivo idêntico (mantém o sem "(1)" ou "_1")
const IGNORAR = new Set([
  "IMG_9164(1).jpeg",
  "IMG_9373(1).jpeg",
  "_MG_5605(1).jpeg",
  "_MG_8546(1).jpeg",
]);

async function processar() {
  fs.mkdirSync(DEST_DIR, { recursive: true });

  const arquivos = fs
    .readdirSync(SRC_DIR)
    .filter((f) => /\.(jpe?g|png)$/i.test(f) && !IGNORAR.has(f))
    .sort();

  console.log(`Processando ${arquivos.length} fotos...`);

  for (let i = 0; i < arquivos.length; i++) {
    const src = path.join(SRC_DIR, arquivos[i]);
    const num = String(i + 1).padStart(2, "0");
    const dest = path.join(DEST_DIR, `${num}.jpg`);

    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(dest);

    console.log(`  ${num}.jpg  ←  ${arquivos[i]}`);
  }

  console.log(`\nConcluído: ${arquivos.length} fotos em public/projetos/melhores-trabalhos/full/`);
}

processar();
