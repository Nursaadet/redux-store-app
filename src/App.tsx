import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-purple-50 min-h-screen text-center">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
