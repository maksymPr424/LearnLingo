import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function RestrictedRoute({ children, redirectTo = "/" }) {
  const isLogged = useSelector(selectIsLogged);
  return (
    <>{isLogged ? <Navigate to={redirectTo} replace={true} /> : children}</>
  );
}
