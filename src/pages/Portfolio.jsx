import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ui/ProjectCard";
import { getProjetosVisiveis } from "../data/projetos";
import { categorias } from "../data/categorias";
import { cn } from "../lib/utils";

const FILTROS = [{ slug: "todos", rotulo: "Todos" }, ...categorias];

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaAtiva = searchParams.get("categoria") ?? "todos";

  const projetosFiltrados = useMemo(() => {
    if (categoriaAtiva === "todos") return getProjetosVisiveis();
    return getProjetosVisiveis().filter((p) => p.categoria === categoriaAtiva);
  }, [categoriaAtiva]);

  function selecionarCategoria(slug) {
    if (slug === "todos") {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: slug });
    }
  }

  return (
    <>
      <SEO
        title="Portfólio"
        description="Veja os projetos de fotografia de Aiara Diniz: gastronomia, produtos, retratos e embalagens."
        path="/portfolio"
      />

      <section className="px-6 pt-16 pb-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wides text-terracotta">
              Portfólio
            </p>
            <h1 className="font-display text-4xl text-ink md:text-5xl">
              Projetos
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="mt-10 flex flex-wrap gap-3"
              role="group"
              aria-label="Filtrar por categoria"
            >
              {FILTROS.map((filtro) => {
                const ativo = filtro.slug === categoriaAtiva;
                return (
                  <button
                    key={filtro.slug}
                    type="button"
                    onClick={() => selecionarCategoria(filtro.slug)}
                    aria-pressed={ativo}
                    className={cn(
                      "rounded-full border px-5 py-2 text-sm uppercase tracking-wides transition-colors duration-400",
                      ativo
                        ? "border-terracotta bg-terracotta text-cream"
                        : "border-ink/15 text-ink hover:border-terracotta hover:text-terracotta",
                    )}
                  >
                    {filtro.rotulo}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {projetosFiltrados.map((projeto) => (
                <motion.div
                  key={projeto.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard projeto={projeto} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {projetosFiltrados.length === 0 && (
            <p className="py-20 text-center text-graphite">
              Nenhum projeto encontrado nessa categoria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
