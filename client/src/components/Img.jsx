// Image that falls back to a branded placeholder if the file is missing.
export default function Img({ src, alt, className = '', ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => {
        if (!e.currentTarget.dataset.fallback) {
          e.currentTarget.dataset.fallback = '1';
          e.currentTarget.src = '/images/placeholder.svg';
        }
      }}
      {...rest}
    />
  );
}