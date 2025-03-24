import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <div className="App">
      <Headers />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookDetails/:bookId" element={<BookDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
