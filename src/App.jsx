import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import { ThemeContext } from "./context";
import OurTeam from "./Components/OurTeam/ourTeam";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-dark text-light" : "bg-secondary text-dark"
      }`}
    >
      <Header />
      <OurTeam />
    </div>
  );
}

export default App;
