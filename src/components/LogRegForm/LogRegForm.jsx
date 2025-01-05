import Button from "../Button/Button";
import css from "./LogRegForm.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  validateLoginFormSchema,
  validateRegisterFormSchema,
} from "../../../validationSchemas";
import { loginUser, registerUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

export default function LogRegForm({ type, isOpen, onRequestClose }) {
  const dispatch = useDispatch();
  const validationSchema =
    type === "logIn" ? validateLoginFormSchema : validateRegisterFormSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [data, setData] = useState("");

  const [isOpenPassword, setIsOpenPassword] = useState(false);

  const handleOpenPassword = () => {
    setIsOpenPassword((prev) => !prev);
  };

  const handleSend = ({ name, email, password }) => {
    const sendData = name ? data : { email, password };
    setData(sendData);

    type === "logIn"
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ name, email, password }));

    reset();
    closeModal();
  };

  const closeModal = (e) => {
    if (e) e.preventDefault();
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.form}>
      <form onSubmit={handleSubmit((data) => handleSend(data))}>
        <button className={css.btnClose} onClick={closeModal}>
          <svg className={css.iconX}>
            <use href="/sprite.svg#icon-x" />
          </svg>
        </button>
        <h2 className={css.title}>
          {type === "logIn" ? "Log In" : "Registration"}
        </h2>
        <p className={css.subtitle}>
          {type === "logIn"
            ? "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            : "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}
        </p>
        <div className={css.inputContainer}>
          {type === "reg" ? (
            <div className={css.errorDiv}>
              <input
                {...register("name")}
                placeholder="Name"
                className={css.input}
              />
              {errors.name && (
                <p className={css.errorMessage}>{errors.name.message}</p>
              )}
            </div>
          ) : null}
          <div className={css.errorDiv}>
            <input
              {...register("email")}
              placeholder="Email"
              className={css.input}
            />
            {errors.email && (
              <p className={css.errorMessage}>{errors.email.message}</p>
            )}
          </div>
          <div className={css.passDiv}>
            <div className={css.errorDiv}>
              <input
                {...register("password")}
                placeholder="Password"
                className={css.input}
                type={isOpenPassword ? "text" : "password"}
              />
              {errors.password && (
                <p className={css.errorMessage}>{errors.password.message}</p>
              )}
            </div>
            <button
              type="button"
              onClick={handleOpenPassword}
              className={css.eyeBtn}
            >
              {isOpenPassword ? (
                <svg className={css.iconEye}>
                  <use href={`/sprite.svg#icon-eye-on`} />
                </svg>
              ) : (
                <svg className={css.iconEye}>
                  <use href={`/sprite.svg#icon-eye-off`} />
                </svg>
              )}
            </button>
          </div>
        </div>
        <label htmlFor="submitInp">
          <input
            name="submitInp"
            id="submitInp"
            type="submit"
            className="visually-hidden"
          />
          <Button customStyles={css.button} type="logReg">
            {type === "logIn" ? "Log In" : "Sign Up"}
          </Button>
        </label>
      </form>
    </Modal>
  );
}
