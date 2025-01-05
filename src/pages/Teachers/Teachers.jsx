import Select from "../../components/Select/Select";
import css from "./Teachers.module.css";

export default function Teachers() {
  return (
    <section>
      <div className={css.filters}>
        <Select typeSelect="language" />
        <Select typeSelect="level" />
        <Select typeSelect="price" />
      </div>
      <div className={css.cards}></div>
    </section>
  );
}
