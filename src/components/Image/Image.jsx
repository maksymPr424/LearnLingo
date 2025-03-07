import css from "./Image.module.css";

export default function Image({ src, alt, styleType }) {
  return (
    <div
      className={`${css.imageContainer} ${
        styleType === "book" ? css.book : null
      }`}
    >
      <img
        src={src}
        alt={alt}
        className={`${css.baseStyle} ${css[styleType]}`}
      />
    </div>
  );
}
