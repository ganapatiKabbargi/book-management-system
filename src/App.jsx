import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Headers />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
