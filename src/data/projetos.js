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
      "Ensaio de retrato e lifestyle para a campanha da Pharos, com direção criativa que une still de joias e acessórios artesanais com cenas de consumo na orla de Salvador.",
    capa: capaDoProjeto("pharos"),
    fotos: fotosDoProjeto("pharos", 15),
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
      "Fotografia gastronômica para o Intégré, espaço de gastronomia contemporânea em Salvador, com registros que vão de pratos autorais e carta de vinhos criteriosamente selecionada à confeitaria artesanal da casa.",
    capa: capaDoProjeto("integre"),
    fotos: fotosDoProjeto("integre", 15),
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
      "Still life gastronômico para a Gostosuras do Mundo, com composição editorial vibrante de ovos de Páscoa recheados, brigadeiros e doces artesanais em cenários coloridos e cheios de energia.",
    capa: capaDoProjeto("gostosuras-do-mundo"),
    fotos: fotosDoProjeto("gostosuras-do-mundo", 15),
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
      "Still life gastronômico para a linha de sorvetes e açaí da Raizen, com cenários naturais e frutas frescas — do pistache ao morango — para reforçar a sensação de frescor do produto.",
    capa: capaDoProjeto("raizen"),
    fotos: fotosDoProjeto("raizen", 14),
  },
  {
    id: 12,
    slug: "the-minimalist-candle",
    nome: "The Minimalist Candle",
    categoria: "produtos",
    cliente: "The Minimalist Candle",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Still life editorial para a The Minimalist Candle, linha de velas aromáticas e aromas artesanais, com cenários em tons rosé que combinam estética de luxo e apelo sensorial.",
    capa: capaDoProjeto("the-minimalist-candle"),
    fotos: fotosDoProjeto("the-minimalist-candle", 5),
  },
  {
    id: 13,
    slug: "goodies",
    nome: "Goodies",
    categoria: "gastronomia",
    cliente: "Goodies",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Fotografia de produto para a linha de doces fit da Goodies, com composição vibrante destacando brigadeiros de colher e mousses sem lactose da linha by Nutrimia.",
    capa: capaDoProjeto("goodies"),
    fotos: fotosDoProjeto("goodies", 2),
  },
  {
    id: 14,
    slug: "latitude-13",
    nome: "Latitude 13°",
    categoria: "gastronomia",
    cliente: "Latitude 13°",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Fotografia de produto para a Latitude 13°, marca de cafés especiais da Chapada Diamantina, com cenário artesanal que valoriza a origem baiana e o ritual do café de filtro.",
    capa: capaDoProjeto("latitude-13"),
    fotos: fotosDoProjeto("latitude-13", 2),
  },
  {
    id: 15,
    slug: "coxa-coxinha",
    nome: "Coxa Coxinha",
    categoria: "gastronomia",
    cliente: "Coxa Coxinha",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Still life gastronômico para a Coxa Coxinha, capturando a identidade colorida e descontraída da marca em composições com coxinhas, brigadeiros e embalagens icônicas.",
    capa: capaDoProjeto("coxa-coxinha"),
    fotos: fotosDoProjeto("coxa-coxinha", 2),
  },
  {
    id: 16,
    slug: "bufalissima",
    nome: "Bufalíssima",
    categoria: "gastronomia",
    cliente: "Bufalíssima",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Fotografia de produto em ambiente natural para a Bufalíssima, linha de queijos de búfala artesanais, reforçando o vínculo com a terra e a produção cuidadosa da marca.",
    capa: capaDoProjeto("bufalissima"),
    fotos: fotosDoProjeto("bufalissima", 2),
  },
  {
    id: 17,
    slug: "sorveteria-da-ribeira",
    nome: "Sorveteria da Ribeira",
    categoria: "gastronomia",
    cliente: "Sorveteria da Ribeira",
    ano: 2024,
    local: "Salvador, BA",
    resumo:
      "Fotografia para a Sorveteria da Ribeira, tradicional sorveteria soteropolitana desde 1931, valorizando a paleta de sabores e a caixa térmica icônica da marca.",
    capa: capaDoProjeto("sorveteria-da-ribeira"),
    fotos: fotosDoProjeto("sorveteria-da-ribeira", 1),
  },
  {
    id: 18,
    slug: "betania",
    nome: "Betânia",
    categoria: "gastronomia",
    cliente: "Betânia",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Still life gastronômico para a Betânia, com composição de café da manhã destacando o iogurte com frutas frescas e granola em cena de mesa natural ao ar livre.",
    capa: capaDoProjeto("betania"),
    fotos: fotosDoProjeto("betania", 1),
  },
  {
    id: 19,
    slug: "smart-gr",
    nome: "Smart GR",
    categoria: "produtos",
    cliente: "Smart GR",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Still life de produto para marcas de estética e beleza profissional, com cenários pink editoriais que comunicam sofisticação e eficácia em dermocosméticos, equipamentos e ampolas.",
    capa: capaDoProjeto("smart-gr"),
    fotos: fotosDoProjeto("smart-gr", 5),
  },
  {
    id: 20,
    slug: "melhores-trabalhos",
    nome: "Melhores Trabalhos",
    categoria: "curadoria",
    destaque: true,
    cliente: "Portfólio Aiara Diniz",
    ano: 2025,
    local: "Salvador, BA",
    resumo:
      "Uma seleção curada das fotografias mais marcantes do portfólio: gastronomia, still life de produto, embalagens e retratos que definem o olhar editorial de Aiara Diniz.",
    capa: capaDoProjeto("melhores-trabalhos"),
    fotos: fotosDoProjeto("melhores-trabalhos", 46),
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
