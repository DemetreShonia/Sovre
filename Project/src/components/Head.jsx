import "../Styles/Head.css";
import logo from "../icons/sovre-logo.png";
import guide from "../icons/tour.png";

const Head = () => {
  return (
    <div className="head">
      <img src={guide} className="guide" />
      <img src={logo} className="logo" />
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">GEO</span>
        <span className="off">ENG</span>
      </div>
    </div>
  );
};

export default Head;
