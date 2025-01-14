import { Modal } from "@mui/material";
import css from "./BookTeacher.module.css";
import Image from "../Image/Image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateBookFormSchema } from "../../../validationSchemas";
import { useState } from "react";
import Button from "../Button/Button";
import { createNewPush } from "../../../utils";

export default function BookTeacher({
  isOpen,
  onRequestClose,
  avatarUrl,
  teacherName,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateBookFormSchema),
  });

  const [data, setData] = useState("");

  const closeModal = (e) => {
    if (e) e.preventDefault();
    onRequestClose();
  };

  const handleSend = async ({ name, email, password }) => {
    const sendData = name ? data : { email, password };
    setData(sendData);

    try {
      // Book teacher functional

      reset();
      closeModal();
      createNewPush({ message: "Success", type: "success" });
    } catch (_) {
      createNewPush({ message: "Something went wrong", type: "error" });
    }
  };

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <form
        onSubmit={handleSubmit((data) => handleSend(data))}
        className={css.form}
      >
        <button onClick={onRequestClose}>
          <svg className={css.iconX}>
            <use href="/sprite.svg#icon-x" />
          </svg>
        </button>
        <h2 className={css.title}>Book trial lesson</h2>
        <p className={css.subtitle}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className={css.teacher}>
          <Image src={avatarUrl} alt="Teacher photo" styleType="book" />
          <div>
            <p className={css.your}>Your teacher</p>
            <h3 className={css.teacherName}>{teacherName}</h3>
          </div>
        </div>
        <div>
          <p className={css.formTitle}>
            What is your main reason for learning English?
          </p>
          <div className={css.radioContainer}>
            <label htmlFor="career" className={css.radioLabel}>
              <input
                {...register("level")}
                type="radio"
                id="career"
                name="level"
                value="Career and business"
                className={`visually-hidden ${css.radioInput}`}
              />
              <span className={css.customRadio}></span>
              Career and business
            </label>
            <label htmlFor="kid" className={css.radioLabel}>
              <input
                {...register("level")}
                type="radio"
                id="kid"
                name="level"
                value="Lesson for kids"
                className={`visually-hidden ${css.radioInput}`}
              />
              <span className={css.customRadio}></span>
              Lesson for kids
            </label>
            <label htmlFor="living" className={css.radioLabel}>
              <input
                {...register("level")}
                type="radio"
                id="living"
                name="level"
                value="Living abroad"
                className={`visually-hidden ${css.radioInput}`}
              />
              <span className={css.customRadio}></span>
              Living abroad
            </label>
            <label htmlFor="exams" className={css.radioLabel}>
              <input
                {...register("level")}
                type="radio"
                id="exams"
                name="level"
                value="Exams and coursework"
                className={`visually-hidden ${css.radioInput}`}
              />
              <span className={css.customRadio}></span>
              Exams and coursework
            </label>
            <label htmlFor="culture" className={css.radioLabel}>
              <input
                {...register("level")}
                type="radio"
                id="culture"
                name="level"
                value="Culture, travel or hobby"
                className={`visually-hidden ${css.radioInput}`}
              />
              <span className={css.customRadio}></span>
              Culture, travel or hobby
            </label>
            {errors.level && (
              <p className={css.errorMessage}>{errors.level.message}</p>
            )}
          </div>
        </div>
        <div className={css.userDataContainer}>
          <div className={css.inputContainer}>
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name"
              className={css.InputData}
            />
            {errors.name && (
              <p className={css.errorMessage}>{errors.name.message}</p>
            )}
          </div>
          <div className={css.inputContainer}>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className={css.InputData}
            />
            {errors.email && (
              <p className={css.errorMessage}>{errors.email.message}</p>
            )}
          </div>
          <div className={css.inputContainer}>
            <input
              {...register("phone")}
              type="text"
              placeholder="Phone number"
              className={css.InputData}
            />
            {errors.phone && (
              <p className={css.errorMessage}>{errors.phone.message}</p>
            )}
          </div>
        </div>
        <label htmlFor="submitInp">
          <input
            name="submitInp"
            id="submitInp"
            type="submit"
            className="visually-hidden"
          />
          <Button customStyles={css.button} type="book">
            Book
          </Button>
        </label>
      </form>
    </Modal>
  );
}
