import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import Button from "../Button/Button";

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
        <Button customStyles={css.logInButton} type="logIn">
          <svg className={css.iconLogiN}>
            <use href="/sprite.svg#icon-logIn" />
          </svg>
          Log in
        </Button>
        <Button type="reg">Registration</Button>
      </div>
    </header>
  );
}
