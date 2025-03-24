import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";

function App() {
  return (
    <div className="App">
      <Headers />
      <main>
        <Home />
        <BooksPage />
      </main>
    </div>
  );
}

export default App;
