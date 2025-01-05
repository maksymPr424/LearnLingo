import Button from "../../components/Button/Button";
import css from "./Home.module.css";
import women from "../../images/heroWomen.png";
import mac from "../../images/Mac.png";


export default function Home() {


  return (
    <section className={css.hero}>
      <div className={css.topInfo}>
        <div className={css.leftInfo}>
          <h1 className={css.title}>
            Unlock your potential with the best{" "}
            <span className={css.titleSpan}>language</span> tutors
          </h1>
          <p className={css.subtitle}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Button type="start">Get started</Button>
        </div>
        <div className={css.heroIcons}>
          <img className={css.woman} src={women} alt="Women Icon" />
          <img className={css.mac} src={mac} alt="Women Icon" />
        </div>
      </div>
      <ul className={css.statistics}>
        <li className={css.statItem}>
          <p className={css.number}>32,000 +</p>
          <p className={css.statItemInfo}>Experienced tutors</p>
        </li>
        <li className={css.statItem}>
          <p className={css.number}>300,000 +</p>
          <p className={css.statItemInfo}>5-star tutor reviews</p>
        </li>
        <li className={css.statItem}>
          <p className={css.number}>120 +</p>
          <p className={css.statItemInfo}>Subjects taught</p>
        </li>
        <li className={css.statItem}>
          <p className={css.number}>200 +</p>
          <p className={css.statItemInfo}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
}
