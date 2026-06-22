import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ui/ProjectCard";
import CategoryNav from "../components/ui/CategoryNav";
import LazyImage from "../components/ui/LazyImage";
import { getProjetosVisiveis } from "../data/projetos";
import { SITE } from "../data/site";

const DESTAQUES = getProjetosVisiveis().slice(0, 8);

const FOTOS_VITRINE = [1, 2, 3, 4, 5, 6].map(
  (n) => `/projetos/melhores-trabalhos/thumb/${String(n).padStart(2, "0")}.webp`,
);

const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-8",
  "md:col-span-4",
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <>
      <SEO
        title="Fotógrafa & Diretora Criativa em Salvador, BA"
        description="Portfólio de Aiara Diniz: fotografia de gastronomia, produtos, retratos e embalagens para marcas e restaurantes em Salvador, BA."
        path="/"
      />

      <section ref={heroRef} className="relative overflow-hidden px-6 pb-20 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-wides text-terracotta">
              {SITE.tagline} · {SITE.local}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">
              {SITE.nome}
            </h1>
            <p className="mt-6 max-w-md text-balance text-base text-graphite md:text-lg">
              {SITE.descricao}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-ink px-7 py-3 text-sm uppercase tracking-wides text-cream transition-colors duration-400 hover:bg-terracotta"
              >
                Ver portfólio
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-ink/20 px-7 py-3 text-sm uppercase tracking-wides text-ink transition-colors duration-400 hover:border-terracotta hover:text-terracotta"
              >
                Falar sobre um projeto
              </Link>
            </div>
          </Reveal>

          <div className="relative grid h-[420px] grid-cols-2 gap-4 md:h-[520px]">
            <motion.div style={{ y: yBack }} className="col-span-1 mt-10">
              <LazyImage
                src="/hero/01.webp"
                alt="Campanha McDonald's — fotografia publicitária por Aiara Diniz"
                aspect="aspect-[3/4]"
                eager
              />
            </motion.div>
            <motion.div style={{ y: yFront }} className="col-span-1 mt-0">
              <LazyImage
                src="/hero/02.webp"
                alt="Still de café Latitude 13° — fotografia de produto por Aiara Diniz"
                aspect="aspect-[3/4]"
                eager
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-wides text-terracotta">
                Curadoria de projetos
              </p>
              <h2 className="font-display text-3xl text-cream md:text-4xl">
                Portfólio
              </h2>
              <p className="mt-3 max-w-xs text-sm text-cream/55">
                Desenvolvidos com estratégia, estética e intenção para comunicar marcas de forma autêntica.
              </p>
            </div>
            <Link
              to="/portfolio/melhores-trabalhos"
              className="inline-flex shrink-0 items-center gap-2 border border-cream/20 px-6 py-2.5 text-sm uppercase tracking-wides text-cream transition-colors duration-400 hover:border-terracotta hover:text-terracotta"
            >
              Ver galeria completa
              <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {FOTOS_VITRINE.map((src, i) => (
              <Reveal key={src} delay={i * 0.04}>
                <Link
                  to="/portfolio/melhores-trabalhos"
                  className="group block"
                  tabIndex={-1}
                  aria-hidden
                >
                  <LazyImage
                    src={src}
                    alt={`Melhores trabalhos — foto ${i + 1}`}
                    aspect={i === 0 || i === 3 ? "aspect-[3/4]" : "aspect-[4/5]"}
                    imgClassName="transition-transform duration-600 ease-out-soft group-hover:scale-[1.04]"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-wides text-terracotta">
                Curadoria de projetos
              </p>
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                Marcas & Projetos
              </h2>
              <p className="mt-3 max-w-md text-sm text-graphite">
                Desenvolvidos com estratégia, estética e intenção para comunicar marcas de forma autêntica.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wides text-ink/70 hover:text-terracotta"
            >
              Ver todos os projetos
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12">
            {DESTAQUES.map((projeto, index) => (
              <Reveal
                key={projeto.id}
                delay={(index % 4) * 0.05}
                className={SPANS[index % SPANS.length]}
              >
                <ProjectCard projeto={projeto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-ink/[0.02] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-wides text-graphite">
              Áreas de Atuação
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <CategoryNav />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <LazyImage
              src="/sobre/03.webp"
              alt="Aiara Diniz — fotógrafa e diretora criativa"
              aspect="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 text-xs uppercase tracking-wides text-terracotta">
              Sobre
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              Muito além da fotografia
            </h2>
            <p className="mt-6 max-w-lg text-graphite">
              Cada projeto começa antes do clique final. Desenvolvo a direção criativa, pesquisa de referências, definição de cenários, composição, luz e narrativa visual para criar imagens que valorizam a marca e desperta desejo no olhar do consumidor.
            </p>
            <p className="mt-4 max-w-lg font-display text-lg text-ink">
              O próximo projeto pode ser o seu.
            </p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wides text-ink hover:text-terracotta"
            >
              Conhecer a Aiara
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl text-cream md:text-5xl">
            Vamos contar a história visual da sua marca?
          </h2>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 bg-terracotta px-8 py-3 text-sm uppercase tracking-wides text-cream transition-colors duration-400 hover:bg-terracotta-light"
          >
            Iniciar conversa
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
