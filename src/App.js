import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
// import Navigation from "./components/Navigation/Navigation";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/">
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
