import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import { rotuloCategoria } from "../../data/categorias";
import { cn } from "../../lib/utils";

export default function ProjectCard({ projeto, aspect = "aspect-[4/5]", className }) {
  return (
    <motion.div layout className={className}>
      <Link
        to={`/portfolio/${projeto.slug}`}
        className="group block focus-visible:outline-none"
        aria-label={`Ver projeto ${projeto.nome}`}
      >
        <LazyImage
          src={projeto.capa}
          alt={`Capa do projeto ${projeto.nome} — ${rotuloCategoria(projeto.categoria)}`}
          aspect={aspect}
          imgClassName="transition-transform duration-600 ease-out-soft group-hover:scale-[1.04]"
          className={cn(
            "ring-1 ring-inset ring-ink/0 transition group-focus-visible:ring-terracotta",
          )}
        />
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-ink transition-colors group-hover:text-terracotta">
            {projeto.nome}
          </h3>
          <span className="whitespace-nowrap text-xs uppercase tracking-wides text-graphite">
            {rotuloCategoria(projeto.categoria)}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
