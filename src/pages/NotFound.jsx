import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada" description="Página não encontrada." />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-7xl text-terracotta">404</p>
        <h1 className="mt-4 font-display text-2xl text-ink">
          Essa página não existe
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wides text-ink hover:text-terracotta"
        >
          Voltar para o início
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
