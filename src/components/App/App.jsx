import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import { Route, Routes, useLocation } from "react-router";
import Loader from "../Loader/Loader";
import PrivateRoute from "../routes/PrivateRoute";
import { useEffect } from "react";
const HomePage = lazy(() => import("../../pages/Home/Home"));
const TeachersPage = lazy(() => import("../../pages/Teachers/Teachers"));
const FavoritesPage = lazy(() => import("../../pages/Favorites/Favorites"));
const NotFoundPage = lazy(() => import("../NotFound/NotFoundPage"));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.className = "";

    if (pathname === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/teachers"
            element={
              <TeachersPage />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
