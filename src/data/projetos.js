function fotosDoProjeto(slug, total, extensao = "jpg") {
  return Array.from({ length: total }, (_, i) => {
    const numero = String(i + 1).padStart(2, "0");
    return `/projetos/${slug}/full/${numero}.${extensao}`;
  });
}

function capaDoProjeto(slug, numero = "01") {
  return `/projetos/${slug}/thumb/${numero}.webp`;
}

export const projetos = [
  {
    id: 1,
    slug: "havanna",
    nome: "Havanna",
    categoria: "produtos",
    cliente: "Havanna",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Still life e fotografia de ambientação para o lançamento da linha de cafés especiais e chocolates da Havanna, destacando embalagem, textura e identidade da marca diretamente nas gôndolas da loja.",
    capa: capaDoProjeto("havanna"),
    fotos: fotosDoProjeto("havanna", 12),
  },
  {
    id: 2,
    slug: "mali-burguer",
    nome: "Mali Burguer",
    categoria: "gastronomia",
    cliente: "Mali Burguer",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Fotografia de cardápio para a Mali Burguer: hambúrgueres, acompanhamentos e detalhes de molho capturados em still para reforçar apetite e textura nas redes sociais e no delivery.",
    capa: capaDoProjeto("mali-burguer"),
    fotos: fotosDoProjeto("mali-burguer", 12),
  },
  {
    id: 3,
    slug: "pharos",
    nome: "Pharos",
    categoria: "retratos",
    cliente: "Pharos",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Ensaio de retrato e lifestyle para a campanha da Pharos, unindo still de acessórios com cenas de consumo em ambiente real, em parceria com um restaurante de Salvador.",
    capa: capaDoProjeto("pharos"),
    fotos: fotosDoProjeto("pharos", 7),
  },
  {
    id: 4,
    slug: "sora",
    nome: "Sora",
    categoria: "gastronomia",
    cliente: "Sora",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Fotografia de cardápio para a Sora: combos, sanduíches e bebidas fotografados em luz natural para destacar frescor e composição do prato.",
    capa: capaDoProjeto("sora"),
    fotos: fotosDoProjeto("sora", 8),
  },
  {
    id: 5,
    slug: "kammi",
    nome: "Kammi",
    categoria: "embalagens",
    cliente: "Kammi",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Still life de embalagem para a linha de velas artesanais da Kammi, com foco no design do rótulo, na textura da cera e na composição de cena para o e-commerce da marca.",
    capa: capaDoProjeto("kammi"),
    fotos: fotosDoProjeto("kammi", 12),
  },
  {
    id: 6,
    slug: "integre",
    nome: "Intégré",
    categoria: "gastronomia",
    cliente: "Intégré",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Still life gastronômico para a linha de cookies da Intégré, com captura do momento da calda de chocolate para reforçar indulgência e textura do produto.",
    capa: capaDoProjeto("integre"),
    fotos: fotosDoProjeto("integre", 12),
  },
  {
    id: 7,
    slug: "nemukta",
    nome: "Nemukta",
    categoria: "gastronomia",
    cliente: "Nemukta",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Fotografia de cardápio para o Nemukta, registrando pratos da cozinha japonesa com composição minimalista e foco na apresentação autêntica de cada peça.",
    capa: capaDoProjeto("nemukta"),
    fotos: fotosDoProjeto("nemukta", 12),
  },
  {
    id: 8,
    slug: "fulora",
    nome: "Fulora",
    categoria: "produtos",
    cliente: "Fulora",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Direção de imagem e still de produto para a Fulora, floricultura de Salvador, unindo still de buquês embalados com cenas lifestyle de entrega e uso real do produto.",
    capa: capaDoProjeto("fulora"),
    fotos: fotosDoProjeto("fulora", 12),
  },
  {
    id: 9,
    slug: "table-and-flowers",
    nome: "Table and Flowers",
    categoria: "produtos",
    cliente: "Table and Flowers",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Still life editorial de acessórios para a Table and Flowers, compondo bolsas e pequenos objetos de couro com elementos florais e paletas de cor autorais.",
    capa: capaDoProjeto("table-and-flowers"),
    fotos: fotosDoProjeto("table-and-flowers", 9),
  },
  {
    id: 10,
    slug: "gostosuras-do-mundo",
    nome: "Gostosuras do Mundo",
    categoria: "gastronomia",
    cliente: "Gostosuras do Mundo",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Still life de produto para a linha de conservas e patês artesanais da Gostosuras do Mundo, com cenários rústicos que reforçam o caráter artesanal da marca.",
    capa: capaDoProjeto("gostosuras-do-mundo"),
    fotos: fotosDoProjeto("gostosuras-do-mundo", 12),
  },
  {
    id: 11,
    slug: "raizen",
    nome: "Raizen",
    categoria: "gastronomia",
    cliente: "Raizen",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Still life gastronômico para a linha de sorvetes e açaí da Raizen, com cenários naturais e frutas frescas para reforçar a sensação de frescor do produto.",
    capa: capaDoProjeto("raizen"),
    fotos: fotosDoProjeto("raizen", 7),
  },
];

export function getProjetoPorSlug(slug) {
  return projetos.find((p) => p.slug === slug);
}

export function getProjetosPorCategoria(categoriaSlug) {
  if (!categoriaSlug || categoriaSlug === "todos") return projetos;
  return projetos.filter((p) => p.categoria === categoriaSlug);
}

export function getProjetoAdjacente(slug, direcao) {
  const index = projetos.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const total = projetos.length;
  const novoIndex =
    direcao === "proximo"
      ? (index + 1) % total
      : (index - 1 + total) % total;
  return projetos[novoIndex];
}
