import { useContext } from "react";
import "./App.css";
import Header from "./Components/header";
import { ThemeContext } from "./context";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-dark text-light" : "bg-secondary text-dark"
      }`}
    >
      <Header />
    </div>
  );
}

export default App;
