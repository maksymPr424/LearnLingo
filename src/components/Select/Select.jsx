import { useEffect, useState } from "react";
import OptionsToFIlters from "../OptionsToFIlters/OptionsToFIlters";
import css from "./Select.module.css";

const labels = {
  level: "Level of knowledge",
  price: "Price",
  language: "Languages",
};

const levels = [
  "A1 Beginner",
  "A2 Elementary",
  "B1 Intermediate",
  "B2 Upper-Intermediate",
  "C1 Advanced",
  "C2 Proficient",
];

const prices = [10, 20, 30, 40];

const languages = ["French", "English", "German", "Ukrainian", "Polish"];

export default function Select({ typeSelect }) {
  const [selectType, setSelectType] = useState([]);

  useEffect(() => {
    switch (typeSelect) {
      case "level":
        setSelectType(levels);
        break;
      case "price":
        setSelectType(prices);
        break;
      case "language":
        setSelectType(languages);
        break;

      default:
        setSelectType([]);
        break;
    }
  }, [typeSelect]);

  return (
    <div className={`${css.basic} ${css[typeSelect]}`}>
      <label htmlFor={typeSelect}>
        {labels[typeSelect]}
        <select name={typeSelect} id={typeSelect}>
          <OptionsToFIlters styleType={typeSelect} arrValues={selectType} />
        </select>
      </label>
    </div>
  );
}
