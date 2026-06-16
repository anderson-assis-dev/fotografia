# Portfólio — Aiara Diniz

Site portfólio de Aiara Diniz, fotógrafa e diretora criativa em Salvador, BA.
Vite + React + Tailwind, com smooth scroll (Lenis), animações (Framer Motion)
e lightbox para as galerias.

## Rodando o projeto

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

```bash
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint     # checagem de lint
```

## Como adicionar um novo projeto ao portfólio

1. Crie uma pasta em `public/projetos/<slug-do-projeto>/full/` (slug em
   minúsculas, sem espaços/acentos — ex.: `cafe-do-porto`).
2. Cole as fotos em alta nessa pasta `full/` (aceita `.jpg`, `.jpeg`, `.png`).
3. Rode o script de otimização para gerar os thumbnails:
   ```bash
   npm run thumbs
   ```
   Ele cria a pasta `thumb/` ao lado de `full/` com versões em WebP (~800px,
   qualidade 80) e o fallback no formato original, para usar nas grades.
4. Abra `src/data/projetos.js` e adicione uma nova entrada no array
   `projetos`, seguindo o modelo:
   ```js
   {
     id: 12,
     slug: "cafe-do-porto",
     nome: "Café do Porto",
     categoria: "gastronomia", // "gastronomia" | "produtos" | "retratos" | "embalagens"
     cliente: "Café do Porto",
     ano: 2026,
     local: "Salvador, BA",
     resumo: "Descrição curta do projeto e do que foi entregue.",
     capa: "/projetos/cafe-do-porto/thumb/01.webp",
     fotos: [
       "/projetos/cafe-do-porto/full/01.jpg",
       "/projetos/cafe-do-porto/full/02.jpg",
     ],
   }
   ```
5. Salve — o projeto já aparece na Home (se estiver entre os 8 primeiros do
   array), no Portfólio e na navegação "anterior/próximo" da página de
   projeto.

Categorias e seus rótulos em PT-BR ficam em `src/data/categorias.js`.

## Antes de publicar — pendências de conteúdo

- `src/data/site.js`: substitua `whatsapp`, `email` e `url` pelos dados
  reais (o número de WhatsApp está com um placeholder e os links de
  contato não vão funcionar até isso ser ajustado).
- `src/pages/About.jsx`: a seção "Sobre" está com um placeholder no lugar
  da foto de retrato — troque pelo bloco `<LazyImage src="..." />` apontando
  para uma foto real.
- `public/sitemap.xml` e `src/data/site.js` usam `https://aiaradiniz.com.br`
  como domínio provisório — atualize para o domínio final.

## Estrutura de fotos

As fotos ficam fora do bundle JS, servidas direto de `public/`:

```
public/projetos/<slug>/full/01.jpg   # fotos em alta, usadas na galeria e no lightbox
public/projetos/<slug>/thumb/01.webp # gerado por `npm run thumbs`, usado nas grades
public/projetos/<slug>/thumb/01.jpg  # fallback do thumbnail para navegadores sem suporte a WebP
```

A pasta `drive-download-*/` na raiz contém os arquivos originais importados
do Google Drive e não faz parte do site (já está no `.gitignore`).

## Stack

- Vite + React 18 (JavaScript)
- Tailwind CSS (tokens de design em `tailwind.config.js`)
- React Router v6
- Framer Motion (animações e transições)
- Lenis (smooth scroll)
- yet-another-react-lightbox (galeria em tela cheia)
- sharp (apenas no script `scripts/gerar-thumbs.mjs`)
- react-helmet-async (SEO por página)

## Deploy (Vercel ou Netlify)

1. Build: `npm run build` — gera a pasta `dist/`.
2. Build command: `npm run build` · Output directory: `dist`.
3. Rewrite de SPA (todas as rotas devolvendo `index.html`): a Vercel já
   resolve isso automaticamente para projetos Vite; para a Netlify, o
   arquivo `public/_redirects` já está incluído no projeto.
4. Depois do primeiro deploy, atualize `SITE.url` em `src/data/site.js` e
   `public/sitemap.xml` com o domínio final.
