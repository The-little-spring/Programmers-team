import { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-secondary"
      }  shadow-sm`}
      dir="rtl"
    >
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a className="nav-link">صفحه اصلی</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">خدمات</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link active">تیم ما</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">ارتباط با ما</a>
          </li>
        </ul>
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"} `}
          onClick={changeMode}
        >
          {darkMode ? "تاریک" : "روشن"}
        </button>
      </div>
    </header>
  );
};

export default Header;
