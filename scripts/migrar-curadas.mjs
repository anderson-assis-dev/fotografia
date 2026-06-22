// Migra as fotos curadas (selecionadas manualmente como as melhores) para os projetos.
// - Projetos existentes: renumera fotos atuais para abrir espaço e insere as novas como primeiras.
// - Novos projetos: cria pasta full/ e copia as fotos.
// Todas as fotos são re-encodadas via sharp para corrigir rotação EXIF e padronizar qualidade.

import { rename, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const SRC = "drive-download-20260617T102902Z-3-001";
const DEST = "public/projetos";

async function ensureDir(path) {
  if (!existsSync(path)) await mkdir(path, { recursive: true });
}

// Move fotos existentes para cima (ex: 01.jpg → 09.jpg) para abrir espaço
async function shiftPhotos(slug, currentCount, newCount) {
  const dir = join(DEST, slug, "full");
  for (let i = currentCount; i >= 1; i--) {
    const oldNum = String(i).padStart(2, "0");
    const newNum = String(i + newCount).padStart(2, "0");
    const oldPath = join(dir, `${oldNum}.jpg`);
    const newPath = join(dir, `${newNum}.jpg`);
    if (existsSync(oldPath)) {
      await rename(oldPath, newPath);
      console.log(`  ${slug}: ${oldNum}.jpg → ${newNum}.jpg`);
    }
  }
}

// Copia e re-encoda (com rotação EXIF) as fotos para a pasta do projeto
async function copyPhotos(slug, sources, startAt = 1) {
  const dir = join(DEST, slug, "full");
  await ensureDir(dir);
  for (let i = 0; i < sources.length; i++) {
    const num = String(startAt + i).padStart(2, "0");
    const src = join(SRC, sources[i]);
    const dest = join(dir, `${num}.jpg`);
    await sharp(src).rotate().jpeg({ quality: 92 }).toFile(dest);
    console.log(`  ${slug}: ${sources[i]} → full/${num}.jpg`);
  }
}

async function main() {
  // ── PROJETOS EXISTENTES ───────────────────────────────────────────────────

  console.log("\n📂 pharos (+8 novas, 7 existentes → 15 total)");
  await shiftPhotos("pharos", 7, 8);
  await copyPhotos("pharos", [
    "IMG_9164.jpeg",    // 01 – mulher de branco na praia (CAPA)
    "IMG_9392.jpeg",    // 02 – brinco dourado de pássaro, close
    "IMG_9409.jpeg",    // 03 – mulher sentada na água
    "IMG_9169.jpeg",    // 04 – colar close-up
    "IMG_9373.jpeg",    // 05 – homem com correntes douradas no mar
    "IMG_9352-2.jpeg",  // 06 – homem com tatuagem e colar
    "IMG_9488.jpeg",    // 07 – chapéu de palha, colar de peixe
    "_MG_5626.jpeg",    // 08 – costas com chapéu e colar de cristal
  ], 1);

  console.log("\n📂 sorveteria-da-ribeira (+7 novas, 7 existentes → 14 total)");
  await shiftPhotos("sorveteria-da-ribeira", 7, 7);
  await copyPhotos("sorveteria-da-ribeira", [
    "_MG_8538-Editar.jpeg",  // 01 – sorvete pistache retrato (CAPA)
    "_MG_8515.jpeg",          // 02 – três casquinhas de pistache
    "_MG_8558.jpeg",          // 03 – casquinha em pé sobre pistaches
    "_MG_8546.jpeg",          // 04 – casquinha vazia sobre pistaches
    "_MG_8542.jpeg",          // 05 – duas casquinhas deitadas
    "_MG_5604.jpeg",          // 06 – sorvetes morango + abacaxi
    "_MG_5605.jpeg",          // 07 – casquinha sobre morangos
  ], 1);

  console.log("\n📂 casa-opera (+3 novas, 12 existentes → 15 total)");
  await shiftPhotos("casa-opera", 12, 3);
  await copyPhotos("casa-opera", [
    "_MG_5984.jpeg",  // 01 – ovo POP com pipoca, laranja vibrante (CAPA)
    "_MG_6057.jpeg",  // 02 – Detetive Caça aos Ovos, fundo roxo
    "_MG_5933.jpeg",  // 03 – três cascas de ovos abertas
  ], 1);

  console.log("\n📂 integre (+3 novas, 12 existentes → 15 total)");
  await shiftPhotos("integre", 12, 3);
  await copyPhotos("integre", [
    "_MG_2116.jpeg",  // 01 – risoto com polvo, light moody (CAPA)
    "_MG_2220.jpeg",  // 02 – garrafas de vinho
    "_MG_2049.jpeg",  // 03 – Blue Moon com garrafa
  ], 1);

  // ── NOVOS PROJETOS ────────────────────────────────────────────────────────

  console.log("\n📂 the-minimalist-candle (5 fotos)");
  await copyPhotos("the-minimalist-candle", [
    "IMG_4139.jpeg",  // 01 – caixa rosa + taças (CAPA)
    "IMG_4178.jpeg",  // 02 – vela em vidro com champagne
    "IMG_4191.jpeg",  // 03 – sabonete líquido com taças
    "IMG_4270.jpeg",  // 04 – corações de cera na caixa rosa
    "IMG_4288.jpeg",  // 05 – kit difusor sobre cetim
  ]);

  console.log("\n📂 goodies (2 fotos)");
  await copyPhotos("goodies", [
    "_MG_9080.jpeg",        // 01 – pote sobre arco verde-amarelo (CAPA)
    "_MG_9093-Editar.jpeg", // 02 – vários potes sobre fundo vermelho
  ]);

  console.log("\n📂 latitude-13 (2 fotos)");
  await copyPhotos("latitude-13", [
    "dd6d3745-eb01-411d-862a-a5d1f2d8f427.jpg",  // 01 – lata Alquimia (CAPA)
    "_MG_2166-1 web2.png",                         // 02 – coador V60 + grãos
  ]);

  console.log("\n📂 coxa-coxinha (2 fotos)");
  await copyPhotos("coxa-coxinha", [
    "_MG_0446.jpeg",  // 01 – coxinhas + brigadeiros coloridos (CAPA)
    "_MG_8954.jpeg",  // 02 – brigadeiros close-up
  ]);

  console.log("\n📂 bufalissima (2 fotos)");
  await copyPhotos("bufalissima", [
    "_MG_2739.jpeg",  // 01 – produto ao ar livre (CAPA)
    "_MG_2582.jpeg",  // 02 – mão segurando pote no piquenique
  ]);

  console.log("\n📂 sorveteria-da-ribeira (1 foto)");
  await copyPhotos("sorveteria-da-ribeira", [
    "_MG_8646-Editar.jpeg",  // 01 – caixa de isopor 1931 (CAPA)
  ]);

  console.log("\n📂 betania (1 foto)");
  await copyPhotos("betania", [
    "_MG_7096.JPG",  // 01 – iogurte com frutas e granola (CAPA)
  ]);

  console.log("\n📂 smart-gr (5 fotos)");
  await copyPhotos("smart-gr", [
    "_MG_6192.JPG",  // 01 – Smart Derma Roller (CAPA)
    "_MG_6219.JPG",  // 02 – Booster Press + equipamentos
    "_MG_6249.JPG",  // 03 – frascos Phdstetics
    "_MG_6259.JPG",  // 04 – ampolas Biometikal / Bioprezz
    "_MG_6280.JPG",  // 05 – Hidramais sabonete
  ]);

  console.log("\n✅ Migração concluída! Rode: npm run thumbs");
}

main().catch((err) => {
  console.error("Erro na migração:", err);
  process.exit(1);
});
