import { Link } from "react-router-dom";
import ArrowIcon from "../../ArrowIcon";
import "./index.scss";

const BUTTON_TYPES = {
  normal: "normal",
  inverted: "inverted",
};

const Button = ({ children, buttonType }) => {
  return (
    <button className={`button ${BUTTON_TYPES[buttonType]}`}>
      {BUTTON_TYPES[buttonType] === "normal" ? (
        <>
          <span>{children}</span>
          <Link to='/personagens'>
            <ArrowIcon />
          </Link>
        </>
      ) : (
        <>
          <Link to='/personagens'>
            <ArrowIcon />
          </Link>
          <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
