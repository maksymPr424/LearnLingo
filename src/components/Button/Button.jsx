import css from "./Button.module.css";

export default function Button({ type, customStyles, children, func }) {
  return (
    <button
      className={`${type === "logIn" ? null : css.baseStyles} ${
        css[type]
      } ${customStyles}`}
      onClick={func}
    >
      {children}
    </button>
  );
}
