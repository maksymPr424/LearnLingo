import * as Yup from "yup";

export const validateLoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+$/,
      "Only latin letters, numbers, and special characters, without spaces."
    )
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must not exceed 64 characters"),
});

export const validateRegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(64, "Name must not exceed 64 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+$/,
      "Only latin letters, numbers, and special characters, without spaces."
    )
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must not exceed 64 characters"),
});

export const validateBookFormSchema = Yup.object().shape({
  level: Yup.string().required("Level is required"),
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(64, "Name must not exceed 64 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]+$/,
      "Only latin letters, numbers, and special characters, without spaces."
    )
    .min(8, "Phone number must be at least 8 characters long")
    .max(64, "Phone number must not exceed 64 characters"),
});
