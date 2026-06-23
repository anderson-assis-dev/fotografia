export const categorias = [
  {
    slug: "gastronomia",
    rotulo: "Gastronomia",
    descricao:
      "Fotografia para cardápios, iFood e redes sociais. Produção de imagens de bebidas, pratos e ambientes de restaurantes, além de registros da equipe e do dia a dia do estabelecimento. Também oferecemos ensaios humanizados para campanhas e datas comemorativas.",
  },
  {
    slug: "produtos",
    rotulo: "Produtos",
    descricao:
      "Fotografia para e-commerce, lançamentos e catálogos. Imagens estratégicas para redes sociais e vendas online, valorizando o produto de forma clara, comercial e atrativa.",
  },
  {
    slug: "retratos",
    rotulo: "Retratos",
    titulo: "Retratos humanizados",
    descricao:
      "Ensaios voltados para profissionais e empreendedores que desejam fortalecer sua presença de marca. Imagens que conectam identidade, posicionamento e autenticidade, ideais para redes sociais, sites e materiais institucionais.",
  },
  {
    slug: "embalagens",
    rotulo: "Embalagens",
    descricao:
      "Fotografia still com foco total no produto, destacando forma, textura e detalhes. Imagens pensadas para aplicações em embalagens, campanhas publicitárias e comunicação visual da marca.",
  },
  {
    slug: "foodstyling",
    rotulo: "Foodstyling",
    descricao:
      "Arte de compor, preparar e emplatar alimentos para a fotografia.",
  },
];

export function rotuloCategoria(slug) {
  return categorias.find((c) => c.slug === slug)?.rotulo ?? slug;
}

export function tituloCategoria(slug) {
  const categoria = categorias.find((c) => c.slug === slug);
  return categoria?.titulo ?? categoria?.rotulo ?? slug;
}

export function descricaoCategoria(slug) {
  return categorias.find((c) => c.slug === slug)?.descricao;
}
