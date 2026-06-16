import { useState } from "react";
import { cn } from "../../lib/utils";

export default function LazyImage({
  src,
  alt,
  className,
  imgClassName,
  aspect = "aspect-[4/5]",
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const fallback = src.replace(/\.webp$/, ".jpg");
  const isWebpSource = src.endsWith(".webp");

  return (
    <div className={cn("relative overflow-hidden bg-ink/5", aspect, className)}>
      <picture>
        {isWebpSource && <source srcSet={src} type="image/webp" />}
        <img
          src={isWebpSource ? fallback : src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-600 ease-out-soft",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      </picture>
    </div>
  );
}
