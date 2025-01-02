import { Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import css from "./LogRegForm.module.css";
import Modal from "react-modal";

const initValues = {
  email: "",
  password: "",
};
const initValuesReg = {
  name: "",
  ...initValues,
};

Modal.setAppElement("#root");

export default function LogRegForm({ type, isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.form}>
      <Formik initialValues={type === "logIn" ? initValues : initValuesReg}>
        <Form>
          <button className={css.btnClose} onClick={onRequestClose}>
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
              <Field name="name" placeholder="Name" className={css.input} />
            ) : null}
            <Field name="email" placeholder="Email" className={css.input} />
            <Field
              name="password"
              placeholder="Password"
              className={css.input}
            />
          </div>
          <Button customStyles={css.button} type="logReg">
            {type === "logIn" ? "Log In" : "Sign Up"}
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
}
