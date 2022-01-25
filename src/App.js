import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Review/Review"));
const HomeView = lazy(() => import("./views/HomeView"));
const MoviesView = lazy(() => import("./views/MoviesView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));
const FilmDetailsView = lazy(() => import("./views/FilmDetailsView"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/movies/:filmId" element={<FilmDetailsView />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="/movies" element={<MoviesView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
