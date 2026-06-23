import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import SEO from "../components/ui/SEO";
import Reveal from "../components/ui/Reveal";
import InstagramIcon from "../components/ui/InstagramIcon";
import { categorias } from "../data/categorias";
import { SITE } from "../data/site";
import { buildWhatsappLink, buildMailtoLink } from "../lib/utils";

const ESTADO_INICIAL = {
  nome: "",
  email: "",
  tipo: categorias[0].slug,
  mensagem: "",
};

function montarTexto({ nome, email, tipo, mensagem }) {
  const rotuloTipo = categorias.find((c) => c.slug === tipo)?.rotulo ?? tipo;
  return [
    `Olá, meu nome é ${nome || "..."}.`,
    `Tenho interesse em um projeto de ${rotuloTipo}.`,
    mensagem && `Mensagem: ${mensagem}`,
    email && `Meu e-mail para contato: ${email}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function Contact() {
  const [form, setForm] = useState(ESTADO_INICIAL);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const texto = montarTexto(form);
  const whatsappHref = buildWhatsappLink(SITE.whatsapp, texto);
  const emailHref = buildMailtoLink(
    SITE.email,
    `Projeto de ${categorias.find((c) => c.slug === form.tipo)?.rotulo ?? ""} — ${form.nome || "novo contato"}`,
    texto,
  );

  return (
    <>
      <SEO
        title="Contato"
        description="Fale com Aiara Diniz sobre o seu próximo projeto de fotografia em Salvador, BA."
        path="/contato"
      />

      <section className="px-6 pt-16 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wides text-terracotta">
              Contato
            </p>
            <h1 className="font-display text-4xl text-ink md:text-5xl">
              Vamos transformar sua ideia em imagem.

            </h1>
            <p className="mt-6 max-w-md text-graphite">
              Preencha os campos abaixo e escolha enviar por WhatsApp ou
              e-mail — sem formulário escondido, sem espera.
            </p>

            <div className="mt-10 flex flex-col gap-4 text-sm">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-ink/80 hover:text-terracotta"
              >
                <InstagramIcon size={18} /> @aiaradiniz
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-3 text-ink/80 hover:text-terracotta"
              >
                <Mail size={18} /> {SITE.email}
              </a>
              <a
                href={buildWhatsappLink(SITE.whatsapp, "Olá! Vim pelo site e gostaria de falar sobre um projeto.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-ink/80 hover:text-terracotta"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="nome" className="mb-2 block text-xs uppercase tracking-wides text-graphite">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none transition-colors focus:border-terracotta"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wides text-graphite">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none transition-colors focus:border-terracotta"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="mb-2 block text-xs uppercase tracking-wides text-graphite">
                  Tipo de projeto
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none transition-colors focus:border-terracotta"
                >
                  {categorias.map((categoria) => (
                    <option key={categoria.slug} value={categoria.slug}>
                      {categoria.rotulo}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-2 block text-xs uppercase tracking-wides text-graphite">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full resize-none border-b border-ink/20 bg-transparent py-2 text-ink outline-none transition-colors focus:border-terracotta"
                  placeholder="Conte um pouco sobre o projeto"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-7 py-3 text-sm uppercase tracking-wides text-cream transition-colors duration-400 hover:bg-terracotta"
                >
                  <MessageCircle size={16} />
                  Enviar por WhatsApp
                </a>
                <a
                  href={emailHref}
                  className="inline-flex items-center gap-2 border border-ink/20 px-7 py-3 text-sm uppercase tracking-wides text-ink transition-colors duration-400 hover:border-terracotta hover:text-terracotta"
                >
                  <Mail size={16} />
                  Enviar por e-mail
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
