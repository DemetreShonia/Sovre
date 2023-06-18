import "../Styles/Map.css";
import Samegrelo from "../Images/Samegrelo.png";
import Star from "../Images/star.png";
import red from "../Images/location-pin-red.png";
import green from "../Images/location-green.png";
import orange from "../Images/location-orange.png";
import present from "../Images/giftbox.png";
import { useState } from "react";
import goldenFlee from "../Images/golden-flee.jfif";

const Map = () => {
  const [isSuggOn, setIsSuggOn] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(-1); // -1 means nothing is selected
  const onGreenPinClicked = () => {
    setSelectedLocation(0);
  };
  const onRedPinClicked = () => {
    setSelectedLocation(2);
  };
  const onOrangePinClicked = () => {
    setSelectedLocation(1);
  };
  const onClickSuggestions = () => {
    setIsSuggOn(true);
  };
  const onClickDisableSuggestions = () => {
    setIsSuggOn(false);
  };
  const locLinks = [
    "https://cdn.georgiantravelguide.com/storage/thumbnails/aa-dsc0236-13-3.jpg",
    "https://cdn.georgiantravelguide.com/storage/thumbnails/dsc-440300-10-2.jpg",
    "https://cdn.georgiantravelguide.com/storage/thumbnails/img-4745-2.jpg",
  ];

  const names = [
    "დადიანების სასახლე",
    "მარტვილის კანიონი",
    "ტობავარჩხილის ტბა",
  ];
  // loc ids
  // 0 = dadianebi
  // 1 = martvili
  // 2 = tobavarchxili
  if (selectedLocation != -1) {
    return (
      <div className="loc-info">
        <img src={locLinks[selectedLocation]} alt="" className="loc-img" />
        <h1 className="nameof">{names[selectedLocation]}</h1>
        <div className="close-container">
          <div
            className="close-btn-to-map"
            onClick={() => setSelectedLocation(-1)}>
            დაბრუნება
          </div>
        </div>
      </div>
    );
  }

  if (isSuggOn)
    return (
      <div className="suggestions">
        <div className="btn-bar">
          <div className="close-btn" onClick={onClickDisableSuggestions}>
            X
          </div>
        </div>
        <div className="content">
          <h2 className="sale">ფასდაკლება</h2>
          <hr />
          <div className="element">
            <img className="partner-img" src={goldenFlee} alt="" />
            <div className="img-holder">
              <div className="price">1200</div>
              <img className="star-sm" src={Star} alt="" />
            </div>
            <div className="other-cont">
              <div className="discount">
                <h4 className="claim-txt">-15%</h4>
              </div>
              <div className="claim-btn">
                <div className="prize-img">
                  <img className="prize-sm" src={present} alt="" />
                </div>
                <h4 className="claim-txt">მიღება</h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="element">
            <img
              className="partner-img"
              src="https://cdn.georgiantravelguide.com/storage/thumbnails/aa-dsc0236-13-3.jpg"
              alt=""
            />
            <div className="img-holder">
              <div className="price">2300</div>
              <img className="star-sm" src={Star} alt="" />
            </div>
            <div className="other-cont">
              <div className="discount">
                <h4 className="claim-txt">-40%</h4>
              </div>
              <div className="claim-btn no-money">
                <div className="prize-img">
                  <img className="prize-sm" src={present} alt="" />
                </div>
                <h4 className="claim-txt">მიღება</h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="element">
            <img
              className="partner-img"
              src="https://www.radioatinati.ge/pictures/1/4330e93b917cc1ba8107f15af775a76b.jpg"
              alt=""
            />
            <div className="img-holder">
              <div className="price">1100</div>
              <img className="star-sm" src={Star} alt="" />
            </div>
            <div className="other-cont">
              <div className="discount">
                <h4 className="claim-txt">-20%</h4>
              </div>
              <div className="claim-btn">
                <div className="prize-img">
                  <img className="prize-sm" src={present} alt="" />
                </div>
                <h4 className="claim-txt">მიღება</h4>
              </div>
            </div>
          </div>
          <hr />
          <div class="level-progress-sale">
            <div className="level-bar-bg">
              <div className="level-bar">UserID: Guest1057</div>
              <div className="level-bar-empty">1300</div>
              <div className="img-holder">
                <img className="star-sm" src={Star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

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

          <div className="prizes" onClick={onClickSuggestions}>
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
