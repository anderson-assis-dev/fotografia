import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import ProjectCard from "../components/ui/ProjectCard";
import CategoryNav from "../components/ui/CategoryNav";
import LazyImage from "../components/ui/LazyImage";
import { projetos } from "../data/projetos";
import { SITE } from "../data/site";

const DESTAQUES = projetos.slice(0, 8);

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
              Aiara Diniz
            </h1>
            <p className="mt-6 max-w-md text-balance text-base text-graphite md:text-lg">
              Imagens que vendem o detalhe: comida, produto e retrato com luz,
              composição e direção de arte para marcas que querem ser
              lembradas.
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
                src={projetos[7].capa}
                alt={`Still de produto do projeto ${projetos[7].nome}`}
                aspect="aspect-[3/4]"
                eager
              />
            </motion.div>
            <motion.div style={{ y: yFront }} className="col-span-1 mt-0">
              <LazyImage
                src={projetos[2].capa}
                alt={`Retrato do projeto ${projetos[2].nome}`}
                aspect="aspect-[3/4]"
                eager
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Trabalhos selecionados
            </h2>
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
              Especialidades
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
              src="/projetos/table-and-flowers/thumb/01.webp"
              alt="Still editorial de produto fotografado por Aiara Diniz"
              aspect="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 text-xs uppercase tracking-wides text-terracotta">
              Sobre
            </p>
            <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              Fotografia com direção de arte, da ideia ao still final.
            </h2>
            <p className="mt-6 max-w-lg text-graphite">
              De Salvador para marcas em todo o Brasil. Co-fundadora da
              RawHub, plataforma feita para fotógrafos. Atuo com gastronomia,
              produtos, retratos e embalagens, sempre com um olhar editorial.
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
