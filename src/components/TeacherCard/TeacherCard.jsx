import { useDispatch, useSelector } from "react-redux";
import css from "./TeacherCard.module.css";
import {
  selectFavoriteTeachersIds,
  selectIsLogged,
} from "../../redux/auth/selectors";
import Image from "../Image/Image";
import { selectLevelFilter } from "../../redux/filters/selectors";
import { useState } from "react";
import {
  addToUserFavorite,
  removeFromUserFavorite,
} from "../../redux/auth/operations";
import Reviews from "../Reviews/Reviews";
import { createNewPush } from "../../../utils";

export default function TeacherCard({ teacher }) {
  const dispatch = useDispatch();
  const {
    avatar_url,
    id,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
    levels,
    experience,
    lessons_done,
    rating,
    price_per_hour,
    reviews,
  } = teacher;
  const currentLevel = useSelector(selectLevelFilter);
  const selected = useSelector(selectFavoriteTeachersIds);
  const loggedIn = useSelector(selectIsLogged);
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);

  const handleOpenMoreInfo = () => {
    setMoreInfoOpen(true);
  };

  const handleCloseMoreInfo = () => {
    setMoreInfoOpen(false);
  };

  const handleFavoriteTeacher = () => {
    if (!loggedIn) {
      createNewPush({
        message: "You wanna to SingUp for set favorite teacher!",
        type: "info",
      });
      return;
    }
    selected.includes(id)
      ? dispatch(removeFromUserFavorite({ id }))
      : dispatch(addToUserFavorite({ id }));
  };

  return (
    <div className={css.container}>
      <Image src={avatar_url} alt="Teacher avatar" styleType="teacher" />
      <div className={css.allInfo}>
        <div className={css.upperInfo}>
          <div className={css.nameSurname}>
            <p className={css.noActive}>Languages</p>
            <h3 className={css.nameTeacher}>{`${name} ${surname}`}</h3>
          </div>

          <div className={css.statistics}>
            <div className={css.upInfoText}>
              <svg className={css.iconBook}>
                <use href="/sprite.svg#icon-book-open" />
              </svg>
              <p className={css.textInfo}>Lessons online</p>
            </div>
            <p className={css.textInfo}>Lessons done: {lessons_done}</p>
            <div className={css.upInfoText}>
              <svg className={css.iconStar}>
                <use href="/sprite.svg#icon-rating" />
              </svg>
              <p className={css.textInfo}>Rating: {rating}</p>
            </div>
            <div className={css.upInfoText}>
              <p className={css.textInfo}>Price / 1 hour:&nbsp;</p>
              <span className={css.price}>{price_per_hour}$</span>
            </div>
            <button onClick={handleFavoriteTeacher}>
              <svg
                className={`${css.iconHeard} 
                ${selected.includes(id) ? css.favorite : null}
                `}
              >
                <use href="/sprite.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.teacherInfo}>
          <div className={`${css.infoText} ${css.languageText}`}>
            <p className={css.noActive}>Speaks:&nbsp;</p>
            <span className={css.underlineText}>{languages.join(", ")}</span>
          </div>
          <div className={`${css.infoText} ${css.languageText}`}>
            <p className={css.noActive}>Lesson Info:&nbsp;</p>
            <span className={css.textInfo}>{lesson_info}</span>
          </div>
          <div className={`${css.infoText} ${css.languageText}`}>
            <p className={css.noActive}>Conditions:&nbsp;</p>
            <span className={css.textInfo}>{conditions.join(" ")}</span>
          </div>
          <div className={css.baseWrapperStyle}>
            <button
              onClick={handleOpenMoreInfo}
              className={`${css.underlineText} ${
                moreInfoOpen ? css.moreInfoActive : null
              }`}
            >
              Read more
            </button>
            <div
              className={`${css.moreInfo} ${
                moreInfoOpen ? null : css.moreInfoActive
              }`}
            >
              <p className={css.experience}>{experience}</p>
              <ul className={css.reviews}>
                {reviews.map((item, index) => (
                  <li key={index} className={css.reviewerCard}>
                    <Reviews item={item} />
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleCloseMoreInfo}
              className={`${css.underlineText} ${
                moreInfoOpen ? null : css.moreInfoActive
              }`}
            >
              Wrap info
            </button>
          </div>
          <ul className={css.levels}>
            {levels.map((item, index) => (
              <li
                key={index}
                className={`${css.level} ${
                  currentLevel === item ? css.activeLevel : null
                }`}
              >
                #{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
