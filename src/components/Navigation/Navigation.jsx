import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import Button from "../Button/Button";
import LogRegForm from "../LogRegForm/LogRegForm";
import { useState } from "react";

export default function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("reg");

  const handleClickRegBtn = () => {
    setTypeModal("reg");
    setModalOpen(true);
  };
  const handleClickLogIn = () => {
    setTypeModal("logIn");
    setModalOpen(true);
  };

  function closeModal() {
    setModalOpen(false);
  }

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
        <div className={css.clickDiv} onClick={handleClickLogIn}>
          <Button customStyles={css.logInButton} type="logIn">
            <svg className={css.iconLogiN}>
              <use href="/sprite.svg#icon-logIn" />
            </svg>
            Log in
          </Button>
        </div>
        <div onClick={handleClickRegBtn}>
          <Button type="reg">Registration</Button>
        </div>
      </div>
      <LogRegForm
        type={typeModal}
        isOpen={modalOpen}
        onRequestClose={closeModal}
      />
    </header>
  );
}
