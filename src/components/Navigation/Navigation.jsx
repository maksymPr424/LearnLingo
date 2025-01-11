import { NavLink, useLocation } from "react-router";
import css from "./Navigation.module.css";
import Button from "../Button/Button";
import LogRegForm from "../LogRegForm/LogRegForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";
import { logOutUser } from "../../redux/auth/operations";
import { Modal } from "@mui/material";

export default function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("reg");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClickRegBtn = () => {
    setTypeModal("reg");
    setModalOpen(true);
    setBurgerOpen(false);
  };

  const handleClickLogIn = () => {
    setTypeModal("logIn");
    setModalOpen(true);
    setBurgerOpen(false);
  };

  const handleClickLogOutBtn = () => {
    dispatch(logOutUser());
    setBurgerOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeBurger = () => {
    setBurgerOpen(false);
  };

  const openBurger = () => {
    setBurgerOpen(true);
  };

  return (
    <header className={`container ${css.header}`}>
      <NavLink to="/" className={css.logoContainer}>
        <svg className={css.iconLogo}>
          <use href="/sprite.svg#icon-logo" />
        </svg>
        <p className={css.logoTEXT}>LearnLingo</p>
      </NavLink>
      {burgerOpen ? (
        <button onClick={closeBurger} className={css.burger}>
          <svg className={css.iconBurger}>
            <use href="/sprite.svg#icon-x" />
          </svg>
        </button>
      ) : (
        <button onClick={openBurger} className={css.burger}>
          <svg className={css.iconBurger}>
            <use href="/sprite.svg#icon-burger" />
          </svg>
        </button>
      )}
      {burgerOpen ? (
        <Modal
          open={burgerOpen}
          onClose={closeBurger}
          className={css.burgerModal}
        >
          <div className={css.burgerModalContent}>
            <nav className={`${css.nav} ${burgerOpen ? css.active : null}`}>
              <ul className={css.linksContainer}>
                <li className={css.linkItem}>
                  <NavLink
                    className={`${css.link} ${
                      pathname === "/" ? css.activeLink : null
                    }`}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className={css.linkItem}>
                  <NavLink
                    className={`${css.link} ${
                      pathname === "/teachers" ? css.activeLink : null
                    }`}
                    to="/teachers"
                  >
                    Teachers
                  </NavLink>
                </li>
                {isLogged ? (
                  <li className={css.linkItem}>
                    <NavLink
                      className={`${css.link} ${
                        pathname === "/favorites" ? css.activeLink : null
                      }`}
                      to="/favorites"
                    >
                      Favorites
                    </NavLink>
                  </li>
                ) : null}
              </ul>
            </nav>
            <div className={`${css.buttons} ${burgerOpen ? css.active : null}`}>
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
          </div>
        </Modal>
      ) : (
        <>
          <nav className={css.nav}>
            <ul className={css.linksContainer}>
              <li className={css.linkItem}>
                <NavLink
                  className={`${css.link} ${
                    pathname === "/" ? css.activeLink : null
                  }`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={css.linkItem}>
                <NavLink
                  className={`${css.link} ${
                    pathname === "/teachers" ? css.activeLink : null
                  }`}
                  to="/teachers"
                >
                  Teachers
                </NavLink>
              </li>
              {isLogged ? (
                <li className={css.linkItem}>
                  <NavLink
                    className={`${css.link} ${
                      pathname === "/favorites" ? css.activeLink : null
                    }`}
                    to="/favorites"
                  >
                    Favorites
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </nav>
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
        </>
      )}
      <LogRegForm
        type={typeModal}
        isOpen={modalOpen}
        onRequestClose={closeModal}
      />
    </header>
  );
}
