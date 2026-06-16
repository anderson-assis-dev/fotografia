import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import LazyImage from "../components/ui/LazyImage";
import {
  getProjetoPorSlug,
  getProjetoAdjacente,
} from "../data/projetos";
import { rotuloCategoria } from "../data/categorias";

function buildGroups(total) {
  const groups = [];
  let i = 0;
  let cycle = 0;
  while (i < total) {
    if (cycle % 2 === 0) {
      groups.push([i]);
      i += 1;
    } else {
      const size = Math.min(2, total - i);
      groups.push(Array.from({ length: size }, (_, k) => i + k));
      i += size;
    }
    cycle += 1;
  }
  return groups;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const projeto = getProjetoPorSlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const grupos = useMemo(
    () => (projeto ? buildGroups(projeto.fotos.length) : []),
    [projeto],
  );

  if (!projeto) {
    return (
      <section className="px-6 py-32 text-center md:px-10">
        <h1 className="font-display text-3xl text-ink">Projeto não encontrado</h1>
        <Link
          to="/portfolio"
          className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wides text-terracotta"
        >
          <ArrowLeft size={16} /> Voltar ao portfólio
        </Link>
      </section>
    );
  }

  const anterior = getProjetoAdjacente(projeto.slug, "anterior");
  const proximo = getProjetoAdjacente(projeto.slug, "proximo");
  const slides = projeto.fotos.map((src) => ({ src }));

  return (
    <>
      <SEO
        title={projeto.nome}
        description={projeto.resumo}
        image={projeto.capa}
        path={`/portfolio/${projeto.slug}`}
      />

      <section className="px-6 pt-16 pb-12 md:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              to="/portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-wides text-graphite hover:text-terracotta"
            >
              <ArrowLeft size={16} /> Portfólio
            </Link>
            <p className="text-xs uppercase tracking-wides text-terracotta">
              {rotuloCategoria(projeto.categoria)}
            </p>
            <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              {projeto.nome}
            </h1>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-graphite">
              <div className="flex gap-2">
                <dt className="text-ink/50">Cliente</dt>
                <dd>{projeto.cliente}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink/50">Ano</dt>
                <dd>{projeto.ano}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink/50">Local</dt>
                <dd>{projeto.local}</dd>
              </div>
            </dl>
            <p className="mt-6 max-w-2xl text-balance text-lg text-ink/80">
              {projeto.resumo}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          {grupos.map((grupo, gi) =>
            grupo.length === 1 ? (
              <Reveal key={gi}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(grupo[0])}
                  className="block w-full focus-visible:outline-none"
                  aria-label={`Ampliar foto ${grupo[0] + 1} do projeto ${projeto.nome}`}
                >
                  <LazyImage
                    src={projeto.fotos[grupo[0]]}
                    alt={`${projeto.nome} — foto ${grupo[0] + 1}`}
                    aspect="aspect-[16/10]"
                  />
                </button>
              </Reveal>
            ) : (
              <Reveal key={gi} className="grid grid-cols-2 gap-6">
                {grupo.map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="block focus-visible:outline-none"
                    aria-label={`Ampliar foto ${idx + 1} do projeto ${projeto.nome}`}
                  >
                    <LazyImage
                      src={projeto.fotos[idx]}
                      alt={`${projeto.nome} — foto ${idx + 1}`}
                      aspect="aspect-[3/4]"
                    />
                  </button>
                ))}
              </Reveal>
            ),
          )}
        </div>
      </section>

      <nav
        className="border-t border-ink/10 px-6 py-10 md:px-10"
        aria-label="Navegação entre projetos"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 text-sm uppercase tracking-wides">
          <Link
            to={`/portfolio/${anterior.slug}`}
            className="inline-flex items-center gap-2 text-ink/70 hover:text-terracotta"
          >
            <ArrowLeft size={16} />
            <span>
              Anterior
              <span className="ml-2 hidden text-ink md:inline">{anterior.nome}</span>
            </span>
          </Link>
          <Link
            to={`/portfolio/${proximo.slug}`}
            className="inline-flex items-center gap-2 text-ink/70 hover:text-terracotta"
          >
            <span>
              <span className="mr-2 hidden text-ink md:inline">{proximo.nome}</span>
              Próximo
            </span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(18, 16, 14, 0.96)" } }}
      />
    </>
  );
}
