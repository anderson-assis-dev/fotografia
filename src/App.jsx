import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="font-display text-sm uppercase tracking-wides text-graphite">
        Carregando…
      </span>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<ProjectDetail />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
