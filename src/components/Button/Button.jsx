import css from "./Button.module.css";

export default function Button({ type, customStyles, children, arrFunc }) {
  return (
    <button
      className={`${type === "logIn" ? null : css.baseStyles} ${
        css[type]
      } ${customStyles}`}
    >
      {children}
    </button>
  );
}
