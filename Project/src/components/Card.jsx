import "../Styles/Card.css"
import guide from "../icons/tour.png"
import audio from "../icons/dadianiAudio.mp3"

const Card = () => {
    return (  
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Dadiani_Palazzio.png" className="img" />
            <div className="info"> 
            დადიანების სასახლე - სამეგრელოს მთავრების, დადიანების რეზიდენცია იყო. ის ოდიშის მთავარმა ლევან II დადიანმა ააშენა,მე-17 საუკუნეში.ქალაქ ზუგდიდის ცენტრში მდებარეობს.
            <div className="more">  იხილე მეტი </div>
            </div>
            <div className="voice"> <div className="guide"> <img src={guide} className="guideimg"/> </div>
                <audio controls autoPlay>
                    <source src={audio} type="audio/ogg" />
                </audio>
            </div>
            <div className="buttons">
                <div className="explore"> აღმოაჩინე მეტი </div>
                <div className="check"> მონიშნე ადგილი </div>
            </div>
        </div>
    );
}
 
export default Card;