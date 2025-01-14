import OptionsToFIlters from "../OptionsToFIlters/OptionsToFIlters";
import css from "./Select.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const selectValues = {
  level: [
    "A1 Beginner",
    "A2 Elementary",
    "B1 Intermediate",
    "B2 Upper-Intermediate",
    "C1 Advanced",
    "C2 Proficient",
  ],
  price: [25, 30, 35, 40],
  language: [
    "French",
    "English",
    "German",
    "Spanish",
    "Korean",
    "Mandarin Chinese",
    "Italian",
    "Vietnamese",
    "Ukrainian",
    "Polish",
  ],
};

const labels = {
  level: "Level of knowledge",
  price: "Price",
  language: "Languages",
};

export default function Select({ typeSelect }) {
  const dispatch = useDispatch();
  const activeFilters = useSelector(selectFilters);

  const handleChangeSelect = (e) => {
    dispatch(setFilter({ type: typeSelect, data: e.target.value }));
  };

  return (
    <label className={`${css.basic} ${css[typeSelect]}`} htmlFor={typeSelect}>
      {labels[typeSelect]}
        <select
          value={activeFilters[typeSelect]}
          name={typeSelect}
          id={typeSelect}
          onChange={handleChangeSelect}
        >
          <OptionsToFIlters
            styleType={typeSelect}
            arrValues={selectValues[typeSelect]}
          />
        </select>
    </label>
  );
}
