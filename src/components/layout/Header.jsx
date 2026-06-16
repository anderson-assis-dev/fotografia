import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-out-soft",
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.08)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-lg tracking-wide text-ink"
          onClick={() => setOpen(false)}
        >
          Aiara Diniz
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-wides text-ink/80 transition-colors hover:text-terracotta",
                  isActive && "text-terracotta",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream md:hidden"
            aria-label="Navegação mobile"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 font-display text-2xl text-ink",
                        isActive && "text-terracotta",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
