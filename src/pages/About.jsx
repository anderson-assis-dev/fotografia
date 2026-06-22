import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import LazyImage from "../components/ui/LazyImage";
import { SITE } from "../data/site";

const AREAS = [
  {
    nome: "Gastronomia",
    descricao:
      "Fotografia para cardápios, iFood e redes sociais. Produção de imagens de bebidas, pratos e ambientes de restaurantes, além de registros da equipe e do dia a dia do estabelecimento. Também oferecemos ensaios humanizados para campanhas e datas comemorativas.",
  },
  {
    nome: "Embalagens",
    descricao:
      "Fotografia still com foco total no produto, destacando forma, textura e detalhes. Imagens pensadas para aplicações em embalagens, campanhas publicitárias e comunicação visual da marca.",
  },
  {
    nome: "Produtos",
    descricao:
      "Fotografia para e-commerce, lançamentos e catálogos. Imagens estratégicas para redes sociais e vendas online, valorizando o produto de forma clara, comercial e atrativa.",
  },
  {
    nome: "Retratos humanizados",
    descricao:
      "Ensaios voltados para profissionais e empreendedores que desejam fortalecer sua presença digital com imagens autênticas, que transmitem personalidade e conexão com o público.",
  },
  {
    nome: "Foodstyling",
    descricao:
      "Preparação e composição de alimentos para fotografia, garantindo apresentação visual impecável em cada clique — do prato ao detalhe do ingrediente.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="Sobre"
        description="Conheça Aiara Diniz, fotógrafa publicitária e diretora criativa em Salvador, BA."
        path="/sobre"
      />

      <section className="px-6 pt-16 pb-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-start gap-14 md:grid-cols-2">
          <Reveal>
            <LazyImage
              src="/sobre/03.webp"
              alt="Aiara Diniz — fotógrafa e diretora criativa"
              aspect="aspect-[2/3]"
              eager
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-wides text-terracotta">
              Sobre
            </p>
            <h1 className="font-display text-4xl text-ink md:text-5xl">
              Por trás das câmeras existe alguém apaixonada por criar.
            </h1>
            <div className="mt-6 space-y-4 text-balance text-ink/80">
              <p>
                Sou Aiara Diniz, fotógrafa publicitária e diretora criativa. Meu trabalho nasceu da vontade de transformar ideias em imagens que geram conexão, despertam emoções e valorizam marcas.
              </p>
              <p>
                Entre produções, cenários, luzes e muitas xícaras de café, encontrei na fotografia uma forma de contar histórias sem precisar de palavras.
              </p>
              <p>
                Hoje ajudo empresas, restaurantes, cafeterias e empreendedores a comunicarem seus produtos e serviços através de imagens pensadas estrategicamente, sempre com um olhar atento aos detalhes e à identidade de cada marca.
              </p>
              <p>
                Acredito que criatividade, planejamento e sensibilidade caminham juntos. E é dessa combinação que surgem os projetos que mais gosto de criar.
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
              Áreas
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {AREAS.map((area, index) => (
              <Reveal key={area.nome} delay={(index % 3) * 0.05}>
                <h3 className="font-display text-xl text-ink">{area.nome}</h3>
                <p className="mt-2 text-sm text-graphite">{area.descricao}</p>
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
