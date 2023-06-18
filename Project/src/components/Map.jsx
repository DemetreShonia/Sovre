import "../Styles/Map.css";
import Samegrelo from "../Images/Samegrelo.png";
import Star from "../Images/star.png";
import red from "../Images/location-pin-red.png";
import green from "../Images/location-green.png";
import orange from "../Images/location-orange.png";
import present from "../Images/giftbox.png";

const Map = () => {
  const onGreenPinClicked = () => {
    console.log("GREEN");
  };
  const onRedPinClicked = () => {
    console.log("RED");
  };
  const onOrangePinClicked = () => {
    console.log("Orange");
  };
  return (
    <div className="map">
      <img
        src={green}
        alt=""
        className="green-pin"
        onClick={onGreenPinClicked}
      />
      <img src={red} alt="" className="red-pin" onClick={onRedPinClicked} />
      <img
        src={orange}
        alt=""
        className="orange-pin"
        onClick={onOrangePinClicked}
      />
      <img src={Samegrelo} alt="" />
      <div className="bottom">
        <div class="level-up-bar">
          <div class="level-progress">
            <div className="level-bar-bg">
              <div className="level-bar">UserID: Guest1057</div>
              <div className="level-bar-empty">1300</div>
              <div className="img-holder">
                <img className="star-sm" src={Star} alt="" />
              </div>
            </div>
          </div>
          <div className="legend">
            <div className="color-group">
              <div className="elem">
                <div className="circle-holder">
                  <div className="circle red"></div>
                </div>
                <h3 className="diff-text"> 400</h3>
                <div className="img-holder">
                  <img className="star" src={Star} alt="" />
                </div>
              </div>
              <div className="elem">
                <div className="circle-holder">
                  <div className="circle orange"></div>
                </div>
                <h3 className="diff-text">200</h3>
                <div className="img-holder">
                  <img className="star" src={Star} alt="" />
                </div>
              </div>
              <div className="elem">
                <div className="circle-holder">
                  <div className="circle green"></div>
                </div>
                <h3 className="diff-text">50</h3>
                <div className="img-holder">
                  <img className="star" src={Star} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="prizes">
            შეთავაზებები
            <div className="prize-img">
              <img className="prize" src={present} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
