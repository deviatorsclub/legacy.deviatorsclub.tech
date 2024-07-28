import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/header/Nav";
import "./App.css";

function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    "Welcome",
    "Bienvenue",
    "Willkommen",
    "Bienvenido",
    "Benvenuto",
    "Salam-aleykum",
    "ようこそ",
  ];

  useEffect(() => {
    if (showGreeting) {
      const intervalId = setInterval(() => {
        setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      }, 300);

      const timeoutId = setTimeout(() => {
        document.getElementById("greeting-window")?.classList.add("fade-out");
        setTimeout(() => {
          setShowGreeting(false);
        }, 1000);
      }, greetings.length * 300);
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [showGreeting, greetings.length]);

  return (
    <Router>
      <div className="bg-black h-full">
        {showGreeting ? (
          <div id="greeting-window" className="greeting-window z-10">
            <h1 className="greeting-text bg-black text-white">
              {greetings[greetingIndex]}
            </h1>
          </div>
        ) : (
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
