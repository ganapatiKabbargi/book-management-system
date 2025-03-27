import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import { fetchBooks } from "./store/booksSlice";
import { useDispatch } from "react-redux";
import Features from "./pages/Features";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="App">
      <Headers />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookDetails/:bookId" element={<BookDetails />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
