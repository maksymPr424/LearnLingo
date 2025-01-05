import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLogged } from "../../redux/auth/selectors";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLogged);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
