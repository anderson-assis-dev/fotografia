import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import { SITE } from "../data/site";

const SERVICOS = [
  {
    nome: "Gastronomia",
    descricao: "Still life de cardápio, pratos e bebidas para restaurantes e marcas de alimentos.",
  },
  {
    nome: "Produtos",
    descricao: "Fotografia de still life para e-commerce, lançamentos e catálogos.",
  },
  {
    nome: "Retratos",
    descricao: "Ensaios de retrato e lifestyle para fundadores, equipes e campanhas.",
  },
  {
    nome: "Embalagens",
    descricao: "Still de embalagem com foco em rótulo, textura e identidade de marca.",
  },
  {
    nome: "Restaurantes",
    descricao: "Cobertura de ambiente, equipe e experiência para casas gastronômicas.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="Sobre"
        description="Conheça Aiara Diniz, fotógrafa e diretora criativa em Salvador, BA, co-fundadora da RawHub."
        path="/sobre"
      />

      <section className="px-6 pt-16 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-start gap-14 md:grid-cols-2">
          <Reveal>
            <div className="flex aspect-[4/5] flex-col items-center justify-center border border-ink/10 bg-terracotta/5 text-center">
              <span className="font-display text-6xl text-terracotta">AD</span>
              <span className="mt-4 px-8 text-xs uppercase tracking-wides text-graphite">
                Foto de retrato — substituir por uma imagem real de Aiara
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-wides text-terracotta">
              Sobre
            </p>
            <h1 className="font-display text-4xl text-ink md:text-5xl">
              Aiara Diniz
            </h1>
            <div className="mt-6 space-y-4 text-balance text-ink/80">
              <p>
                Fotógrafa e diretora criativa baseada em Salvador, Bahia, com
                o olhar treinado para transformar comida, produto e marca em
                imagem que vende. De Salvador para o Brasil — atendo clientes
                remotamente e em viagem.
              </p>
              <p>
                Co-fundadora da <strong>RawHub</strong>, plataforma feita por
                e para fotógrafos, nascida da vontade de organizar e
                profissionalizar a rotina de quem vive de imagem.
              </p>
              <p>
                Cada projeto passa por direção de arte antes da primeira
                foto: referência, paleta, luz e composição pensadas para a
                identidade de cada marca.
              </p>
            </div>

            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wides text-ink hover:text-terracotta"
            >
              Iniciar um projeto
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink/[0.02] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Serviços
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {SERVICOS.map((servico, index) => (
              <Reveal key={servico.nome} delay={(index % 3) * 0.05}>
                <h3 className="font-display text-xl text-ink">{servico.nome}</h3>
                <p className="mt-2 text-sm text-graphite">{servico.descricao}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:px-10">
        <Reveal>
          <p className="text-sm uppercase tracking-wides text-graphite">
            Acompanhe o trabalho no dia a dia
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-display text-2xl text-ink hover:text-terracotta"
          >
            @aiaradiniz
          </a>
        </Reveal>
      </section>
    </>
  );
}
