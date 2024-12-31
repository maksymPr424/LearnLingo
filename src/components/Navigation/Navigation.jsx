import { NavLink } from "react-router";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={`container ${css.header}`}>
      <NavLink to="/" className={css.logoContainer}>
        <svg className={css.iconLogo}>
          <use href="/sprite.svg#icon-logo" />
        </svg>
        <p className={css.logoTEXT}>LearnLingo</p>
      </NavLink>
      <nav>
        <ul className={css.linksContainer}>
          <li className={css.linkItem}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.linkItem}>
            <NavLink className={css.link} to="/teachers">
              Teachers
            </NavLink>
          </li>
          <li className={css.linkItem}>
            <NavLink className={css.link} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={css.buttons}>
        <button className={css.logInButton}>
          <svg className={css.iconLogiN}>
            <use href="/sprite.svg#icon-logIn" />
          </svg>
          Log in
        </button>
        <button className={css.regButton}>Registration</button>
      </div>
    </header>
  );
}
