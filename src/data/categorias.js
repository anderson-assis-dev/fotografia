export const categorias = [
  { slug: "gastronomia", rotulo: "Gastronomia" },
  { slug: "produtos", rotulo: "Produtos" },
  { slug: "retratos", rotulo: "Retratos" },
  { slug: "embalagens", rotulo: "Embalagens" },
];

export function rotuloCategoria(slug) {
  return categorias.find((c) => c.slug === slug)?.rotulo ?? slug;
}
