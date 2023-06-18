import "../Styles/Head.css";
import logo from "../icons/sovre-logo.png";

const Head = () => {
  return (
    <div className="head">
      <img src={logo} className="logo" />
      <div className="user"> Guest </div>
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">ქარ</span>
        <span className="off">ENG</span>
      </div>
    </div>
  );
};

export default Head;
