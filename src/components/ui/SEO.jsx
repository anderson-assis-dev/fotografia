import { Helmet } from "react-helmet-async";
import { SITE } from "../../data/site";

export default function SEO({ title, description, image, path = "" }) {
  const fullTitle = title ? `${title} | ${SITE.nome}` : SITE.nome;
  const url = `${SITE.url}${path}`;
  const imagePath = image ? image.replace(/\.webp$/, ".jpg") : "/favicon.svg";
  const ogImage = `${SITE.url}${imagePath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
