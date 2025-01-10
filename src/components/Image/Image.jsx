import css from "./Image.module.css";

export default function Image({ src, alt, styleType }) {
  return (
    <div className={css.imageContainer}>
      <img
        src={src}
        alt={alt}
        className={`${css.baseStyle} ${css[styleType]}`}
      />
    </div>
  );
}
