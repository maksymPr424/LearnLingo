import { useState } from "react";
import css from "../Teachers/Teachers.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoriteTeachers,
  selectPerPage,
} from "../../redux/teachers/selectors";
import { useEffect } from "react";
import { getTeachers } from "../../redux/teachers/operations";
import TeachersCards from "../../components/TeachersCards/TeachersCards";
import Button from "../../components/Button/Button";

export default function Favorites() {
  const [page, setPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState([]);
  const dispatch = useDispatch();

  const filtered = useSelector(selectFavoriteTeachers);
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
      (_, index) => index >= perPage * page && index < perPage * (page + 1)
    );

    setVisibleCards((prev) => [...prev, ...newCard]);
    setPage((prev) => prev + 1);
  };

  return (
    <section className={css.teachers}>
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
