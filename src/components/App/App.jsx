import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import { Route, Routes } from "react-router";
const HomePage = lazy(() => import("../../pages/Home/Home"));
const TeachersPage = lazy(() => import("../../pages/Teachers/Teachers"));
const FavoritesPage = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>loader...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
