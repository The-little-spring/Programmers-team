import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./card.css";

const Card = ({ imageUrl, name, skills, mobile, email }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`card text-black text-center shadow-lg m-2 ${
        darkMode ? "dark-card" : "light-card"
      }`}
    >
      <div className="card-body">
        <img
          src={imageUrl}
          className="rounded-3"
          width="140"
          alt="programmer"
        />
        <div className="fs-sm mt-3 fw-bold">{name}</div>
        <div className="fs-sm">{skills}</div>
        <div className="fs-sm mt-3">{mobile}</div>
        <div className="fs-sm">{email}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
