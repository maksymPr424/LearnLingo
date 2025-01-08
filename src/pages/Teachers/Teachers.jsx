import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/Select/Select";
import css from "./Teachers.module.css";
import { getTeachers } from "../../redux/teachers/operations";
import { useEffect } from "react";
import { selectTeachersWithFilters } from "../../redux/teachers/selectors";

export default function Teachers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeachers);
  }, [dispatch]);

  const filtered = useSelector(selectTeachersWithFilters);

  const handleClick = () => {
    dispatch(getTeachers());
  };

  return (
    <section className={css.teachers}>
      <div className={css.filters}>
        <Select typeSelect="language" />
        <Select typeSelect="level" />
        <Select typeSelect="price" />
      </div>
      <div className={css.cards}></div>
    </section>
  );
}
