import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = path.join(process.cwd(), "drive-download-20260622T135718Z-3-001");
const PUBLIC = path.join(process.cwd(), "public");

async function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function srcPath(folder, file) {
  return path.join(SRC, folder, file);
}

async function processImage(input, output) {
  await ensureDir(path.dirname(output));
  await sharp(input).rotate().jpeg({ quality: 92 }).toFile(output);
}

async function copyProject(slug, items) {
  const dir = path.join(PUBLIC, "projetos", slug, "full");
  fs.rmSync(dir, { recursive: true, force: true });
  await ensureDir(dir);
  for (let i = 0; i < items.length; i++) {
    const num = String(i + 1).padStart(2, "0");
    const { folder, file } = items[i];
    await processImage(srcPath(folder, file), path.join(dir, `${num}.jpg`));
    console.log(`  ${slug}/${num}.jpg ← ${file}`);
  }
}

async function copyHero(items) {
  const dir = path.join(PUBLIC, "hero");
  fs.rmSync(dir, { recursive: true, force: true });
  await ensureDir(dir);
  for (let i = 0; i < items.length; i++) {
    const num = String(i + 1).padStart(2, "0");
    const { folder, file } = items[i];
    await processImage(srcPath(folder, file), path.join(dir, `${num}.jpg`));
    console.log(`  hero/${num}.jpg ← ${file}`);
  }
}

async function copySobre(file, folder) {
  const dir = path.join(PUBLIC, "sobre");
  await ensureDir(dir);
  await processImage(srcPath(folder, file), path.join(dir, "01.jpg"));
  console.log(`  sobre/01.jpg ← ${file}`);
}

async function copyMelhores(items) {
  const dir = path.join(PUBLIC, "projetos", "melhores-trabalhos", "full");
  fs.rmSync(dir, { recursive: true, force: true });
  await ensureDir(dir);
  for (let i = 0; i < items.length; i++) {
    const num = String(i + 1).padStart(2, "0");
    const { folder, file } = items[i];
    await processImage(srcPath(folder, file), path.join(dir, `${num}.jpg`));
  }
  console.log(`  melhores-trabalhos: ${items.length} fotos`);
}

const CAPA = "FOTO CAPA SITE - 2026";
const PRODUTO = "FOTO DE PRODUTO - 2026";
const REST = "FOTO RESTAURANTES - 2026";
const CAMP = "Campanhas - 2026";
const HUM = "FOTO SITE HUMANIZADAS - 2026";
const RET = "Retratos - 2026";

async function main() {
  console.log("\n📸 Hero");
  await copyHero([
    { folder: CAPA, file: "a2ff5ac6-8558-4c3d-a22c-fc04bb7952c7.jpg" },
    { folder: CAPA, file: "_MG_2166-1 web2.png" },
  ]);

  console.log("\n📸 Fulora");
  const fuloraBouquet = path.join(PUBLIC, "projetos", "fulora", "full", "01.jpg");
  const tempBouquet = path.join(process.cwd(), ".tmp-fulora-bouquet.jpg");
  const fuloraItems = [
    { folder: CAMP, file: "6d21327d-8e7e-4b76-b80f-8354a855774c.jpg" },
    { folder: PRODUTO, file: "ea47d31e-04dc-407a-9a38-5c32ebdc5f5c.jpg" },
    { folder: PRODUTO, file: "35601f3c-7aa3-4a34-a053-a65537cff414.jpg" },
  ];
  const fuloraRetratosItems = [
    { folder: RET, file: "_MG_5319-Editar.jpeg" },
    { folder: RET, file: "_MG_5508-Aprimorado-NR.jpeg" },
    { folder: RET, file: "_MG_5380.jpeg" },
    { folder: RET, file: "_MG_5421.jpeg" },
    { folder: RET, file: "_MG_5446.jpeg" },
  ];
  if (fs.existsSync(fuloraBouquet)) {
    fs.copyFileSync(fuloraBouquet, tempBouquet);
  }
  const dir = path.join(PUBLIC, "projetos", "fulora", "full");
  fs.rmSync(dir, { recursive: true, force: true });
  await ensureDir(dir);
  if (fs.existsSync(tempBouquet)) {
    await processImage(tempBouquet, path.join(dir, "01.jpg"));
    fs.unlinkSync(tempBouquet);
    console.log("  fulora/01.jpg ← capa buquê existente");
  }
  const start = fs.existsSync(path.join(dir, "01.jpg")) ? 2 : 1;
  for (let i = 0; i < fuloraItems.length; i++) {
    const num = String(i + start).padStart(2, "0");
    const { folder, file } = fuloraItems[i];
    await processImage(srcPath(folder, file), path.join(dir, `${num}.jpg`));
    console.log(`  fulora/${num}.jpg ← ${file}`);
  }

  console.log("\n📸 Fulora Retratos");
  await copyProject("fulora-retratos", fuloraRetratosItems);

  console.log("\n📸 Projetos");
  await copyProject("latitude-13", [
    { folder: CAPA, file: "dd6d3745-eb01-411d-862a-a5d1f2d8f427.jpg" },
    { folder: CAPA, file: "_MG_2166-1 web2.png" },
  ]);
  await copyProject("smart-gr", [
    { folder: PRODUTO, file: "_MG_6192.JPG" },
    { folder: PRODUTO, file: "_MG_6219.JPG" },
    { folder: PRODUTO, file: "_MG_6249.JPG" },
    { folder: PRODUTO, file: "_MG_6259.JPG" },
    { folder: PRODUTO, file: "_MG_6280.JPG" },
  ]);
  await copyProject("pharos", [
    { folder: PRODUTO, file: "IMG_9164.jpeg" },
    { folder: PRODUTO, file: "IMG_9169.jpeg" },
    { folder: PRODUTO, file: "IMG_9352-2.jpeg" },
    { folder: PRODUTO, file: "IMG_9373.jpeg" },
    { folder: PRODUTO, file: "IMG_9488_1.jpeg" },
  ]);
  await copyProject("casa-opera", [
    { folder: CAMP, file: "_MG_5984.jpeg" },
    { folder: CAMP, file: "_MG_6057.jpeg" },
    { folder: CAMP, file: "_MG_5933.jpeg" },
    { folder: CAMP, file: "_MG_5928.jpeg" },
    { folder: CAMP, file: "_MG_5586.jpeg" },
    { folder: CAMP, file: "_MG_5633.jpeg" },
    { folder: CAMP, file: "_MG_4163.JPG" },
    { folder: CAMP, file: "29e43030-de22-471b-bde8-42de4c621a1e.jpg" },
  ]);
  await copyProject("integre", [
    { folder: REST, file: "_MG_2116.jpeg" },
    { folder: REST, file: "_MG_2220.jpeg" },
    { folder: REST, file: "_MG_9814-2-2.jpeg" },
    { folder: REST, file: "IMG_3257.JPG" },
    { folder: REST, file: "IMG_3258.JPG" },
    { folder: REST, file: "IMG_3259.JPG" },
  ]);
  await copyProject("sorveteria-da-ribeira", [
    { folder: CAPA, file: "_MG_8538-Editar.jpeg" },
  ]);
  await copyProject("coxa-coxinha", [
    { folder: CAPA, file: "_MG_0446.jpeg" },
  ]);
  await copyProject("bufalissima", [
    { folder: CAPA, file: "_MG_2739.jpeg" },
    { folder: HUM, file: "_MG_2582.jpeg" },
  ]);
  await copyProject("goodies", [
    { folder: HUM, file: "_MG_9080.jpeg" },
  ]);

  console.log("\n📸 Melhores trabalhos");
  const melhores = [
    { folder: CAPA, file: "a2ff5ac6-8558-4c3d-a22c-fc04bb7952c7.jpg" },
    { folder: CAPA, file: "_MG_2166-1 web2.png" },
    { folder: CAPA, file: "dd6d3745-eb01-411d-862a-a5d1f2d8f427.jpg" },
    { folder: CAPA, file: "_MG_8538-Editar.jpeg" },
    { folder: CAPA, file: "_MG_3396.JPG" },
    { folder: CAPA, file: "_MG_0446.jpeg" },
    { folder: CAMP, file: "_MG_5984.jpeg" },
    { folder: CAMP, file: "_MG_6057.jpeg" },
    { folder: PRODUTO, file: "IMG_9164.jpeg" },
    { folder: PRODUTO, file: "ea47d31e-04dc-407a-9a38-5c32ebdc5f5c.jpg" },
    { folder: REST, file: "_MG_2116.jpeg" },
    { folder: REST, file: "_MG_9814-2-2.jpeg" },
    { folder: HUM, file: "_MG_3209.jpeg" },
    { folder: HUM, file: "_MG_3152.jpeg" },
    { folder: RET, file: "_MG_5319-Editar.jpeg" },
    { folder: RET, file: "_MG_5508-Aprimorado-NR.jpeg" },
    { folder: PRODUTO, file: "DSCF6547.jpeg" },
    { folder: PRODUTO, file: "_MG_6192.JPG" },
  ];
  await copyMelhores(melhores);

  console.log("\n✅ Migração concluída. Rode: node scripts/gerar-thumbs.mjs");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
