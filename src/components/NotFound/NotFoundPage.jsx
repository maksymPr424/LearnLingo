import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFoundPage}>
      <h1 className={css.h1}>Page not found</h1>
      <Link className={css.homeLink} to="/">
        Go to Home page
      </Link>
    </div>
  );
}
