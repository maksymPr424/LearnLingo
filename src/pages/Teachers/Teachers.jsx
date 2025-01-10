import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/Select/Select";
import css from "./Teachers.module.css";
import { getTeachers } from "../../redux/teachers/operations";
import { useEffect, useState } from "react";
import {
  selectPerPage,
  selectTeachersWithFilters,
} from "../../redux/teachers/selectors";
import TeachersCards from "../../components/TeachersCards/TeachersCards";
import Button from "../../components/Button/Button";

export default function Teachers() {
  const [page, setPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState([]);
  const dispatch = useDispatch();

  const filtered = useSelector(selectTeachersWithFilters);
  const perPage = useSelector(selectPerPage);
  const total = filtered.length;

  useEffect(() => {
    dispatch(getTeachers());
    const startCard = filtered.filter((item, index) => index < perPage);

    setVisibleCards(startCard);
    setPage(1);
  }, [dispatch, filtered, perPage]);

  const handleClick = () => {
    if (total < page * perPage) return;
    const newCard = filtered.filter(
      (item, index) => index >= perPage * page && index < perPage * (page + 1)
    );

    setVisibleCards((prev) => [...prev, ...newCard]);
    setPage((prev) => prev + 1);
  };

  return (
    <section className={css.teachers}>
      <div className={css.filters}>
        <Select typeSelect="language" />
        <Select typeSelect="level" />
        <Select typeSelect="price" />
      </div>
      <div className={css.cards}>
        <TeachersCards visibleCards={[...visibleCards]} />
        {total < page * perPage ? null : (
          <div className={css.button}>
            <Button customStyles={css.button} func={handleClick}>
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
