import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import CharactersPage from "./pages/CharactersPage";
import FavouritesPage from "./pages/FavouritePage";
import CharacterDetail from "./pages/CharacterDetail";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
        <Route path="/character/:name" element={<CharacterDetail />} />
      </Routes>
    </>
  );
}
