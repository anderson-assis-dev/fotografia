import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import InstagramIcon from "../ui/InstagramIcon";
import { SITE } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <Link to="/" className="font-display text-xl text-ink">
            {SITE.nome}
          </Link>
          <p className="mt-2 max-w-sm text-sm text-graphite">
            {SITE.tagline} · {SITE.local}
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm uppercase tracking-wides text-ink/80" aria-label="Links do rodapé">
          <Link to="/portfolio" className="hover:text-terracotta">Portfólio</Link>
          <Link to="/sobre" className="hover:text-terracotta">Sobre</Link>
          <Link to="/contato" className="hover:text-terracotta">Contato</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Aiara Diniz"
            className="text-ink/70 transition-colors hover:text-terracotta"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Enviar e-mail para Aiara Diniz"
            className="text-ink/70 transition-colors hover:text-terracotta"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-6 text-center text-xs text-graphite md:px-10">
        © {new Date().getFullYear()} {SITE.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
