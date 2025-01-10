import Image from "../Image/Image";
import css from "./Reviews.module.css";

export default function Reviews({ item }) {
  const { comment, reviewer_name, reviewer_rating } = item;

  return (
    <div className={css.container}>
      <div className={css.reviewInfo}>
        {item.avatar ? (
          <Image src={item.avatar} alt="Reviver photo" styleType="reviver" />
        ) : (
          <div className={css.noImage}>
            <svg className={css.iconUser}>
              <use href="/sprite.svg#icon-user" />
            </svg>
          </div>
        )}
        <div className={css.infoContainer}>
          <p className={css.reviverName}>{reviewer_name}</p>
          <div className={css.upInfoText}>
            <svg className={css.iconStar}>
              <use href="/sprite.svg#icon-rating" />
            </svg>
            <p className={css.textInfo}>{reviewer_rating}.0</p>
          </div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </div>
  );
}
