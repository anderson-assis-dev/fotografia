import { Link } from "react-router-dom";
import { categorias } from "../../data/categorias";

export default function CategoryNav({ className }) {
  return (
    <nav className={className} aria-label="Categorias de trabalho">
      <ul className="flex flex-wrap gap-3">
        {categorias.map((categoria) => (
          <li key={categoria.slug}>
            <Link
              to={`/portfolio?categoria=${categoria.slug}`}
              className="inline-flex items-center rounded-full border border-ink/15 px-5 py-2 text-sm uppercase tracking-wides text-ink transition-colors duration-400 hover:border-terracotta hover:text-terracotta"
            >
              {categoria.rotulo}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
