import css from "./OptionsToFIlters.module.css";

export default function OptionsToFIlters({ styleType, arrValues }) {
  return (
    <>
      {arrValues.map((item) => (
        <option
          className={css[styleType]}
          id={styleType}
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </>
  );
}
