import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../../context";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`shadow-sm ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-secondary"
        }`}
        dir="rtl"
      >
        <div className="container position-relative">
          <div>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="mr-auto">
                <Nav.Link href="#">صفحه اصلی</Nav.Link>
                <Nav.Link href="#">خدمات</Nav.Link>
                <Nav.Link href="#" className="active">
                  تیم ما
                </Nav.Link>
                <Nav.Link href="#">ارتباط با ما</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
            onClick={changeMode}
            style={{
              position: "absolute",
              top: "0.5rem",
              left: "0.5rem",
              zIndex: 1000,
              marginLeft: "1rem",
            }}
          >
            {darkMode ? "روشن" : "تاریک"}
          </button>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
