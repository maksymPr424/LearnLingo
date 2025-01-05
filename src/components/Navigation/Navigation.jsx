import { NavLink } from "react-router";
import css from "./Navigation.module.css";
import Button from "../Button/Button";
import LogRegForm from "../LogRegForm/LogRegForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectIsLogged } from "../../redux/auth/selectors";
import { logOutUser } from "../../redux/auth/operations";
import Loader from "../Loader/Loader";

export default function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("reg");
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleClickRegBtn = () => {
    setTypeModal("reg");
    setModalOpen(true);
  };

  const handleClickLogIn = () => {
    setTypeModal("logIn");
    setModalOpen(true);
  };

  const handleClickLogOutBtn = () => {
    dispatch(logOutUser());
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
          {isLogged ? (
            <li className={css.linkItem}>
              <NavLink className={css.link} to="/favorites">
                Favorites
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
      {isLoading ? (
        <Loader width="48px" height="48px" />
      ) : (
        <div className={css.buttons}>
          {isLogged ? (
            <div onClick={handleClickLogOutBtn}>
              <Button type="reg">Log Out</Button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
      <LogRegForm
        type={typeModal}
        isOpen={modalOpen}
        onRequestClose={closeModal}
      />
    </header>
  );
}
