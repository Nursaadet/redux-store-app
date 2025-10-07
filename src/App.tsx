import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <div className="bg-slate-500 min-h-screen text-center">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage/>}} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
