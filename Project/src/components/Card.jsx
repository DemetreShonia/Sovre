import React, { useState, useEffect } from 'react';
import '../Styles/Card.css';
import guide from '../icons/tour.png';
import audio from '../icons/dadianiAudio.mp3';

import checked from "../icons/checked.png"
import checkedDone from "../icons/checkedDone.png"

const Card = () => {
  const [showMore, setShowMore] = useState(false);
  const [isDone , setIsDone] = useState(false);




 
  return (
    <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Dadiani_Palazzio.png" className="img" />
      <div className="info">
        დადიანების სასახლე - სამეგრელოს მთავრების, დადიანების რეზიდენცია იყო. ის ოდიშის მთავარმა ლევან II დადიანმა ააშენა,მე-17 საუკუნეში.ქალაქ ზუგდიდის ცენტრში მდებარეობს.
        {showMore && (
          <div className="more" id="moreDiv">
            მუზეუმში გამოფენილია ამ მხარის არქეოლოგიური (პალეოლითის, ნეოლითისა და ბრინჯაოს ხანის ნივთები) და ეთნოგრაფიული (სასოფლო-სამეურნეო იარაღი, საყოფაცხოვრებო ნივთები, ტანსაცმელი, საცხოვრებელ ნაგებობათა – „ფაცხა“, „ჯარგვალი“, „ოდა“ – და სხვა ნიმუშები) მასალა. წარმოდგენილია ფეოდალური ხანის საქართველოს ისტორიის ამსახველი ექსპონატები. სამეგრელოს უკანასკნელი მთავრის დავით დადიანისა და მისი ოჯახის წევრთა პირადი ნივთები.

            ზუგდიდის დადიანების სასახლეთა ისტორიულ-არქიტექტურულ მუზეუმში ინახება მსოფლიო მნიშვნელობის სამუზეუმო ექსპონატები და რელიგიური სიწმინდეები. მუზეუმის გარშემო მდებარეობს სამეგრელოს მთავარ დადიანთა მიერ გაშენებული ტყე-პარკი 67 ჰექტარზე, სადაც ხარობს მსოფლიოს სხვადასხვა კუთხიდან ჩამოტანილი უნიკალური და მრავალწლიანი ხეები და ბუჩქები.
          </div>
        )}
        {!showMore && (
          <div className="more" onClick={() => setShowMore(true)}>
            იხილე მეტი
          </div>
        )}
      </div>
      <div className="voice">
        <div className="guide">
          <img src={guide} className="guideimg" />
        </div>
        <audio controls autoPlay>
          <source src={audio} type="audio/ogg" />
        </audio>
      </div>
      <div className="buttons">
        <div className="explore" >
          აღმოაჩინე მეტი
        </div>
        <div className="checked">
            <img className='checkmark' onClick={()=> { if(!isDone){setIsDone(true)}}} src={(!isDone)? checked : checkedDone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
