import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import image from "./assets/image.png";

const questions = [
  { id: 1, savol: "Odam Skleti nechta suyakdan tashkil topgan ?" },
  { id: 2, savol: "Bosh Suyagi haqida gapirib bering." },
  { id: 3, savol: "Gavda skleti necha qismdan iborat ?" },
  { id: 4, savol: "Umurtqa pog'onasi nechta suyakdan tashkil topgan ?" },
  { id: 5, savol: "Ko'krak qafasi nechta suyakdan tashkil topgan ?" },
  { id: 7, savol: "Qovurg'alarning soni nechta ? " },
  { id: 6, savol: "To'sh suyagi haqida gapirib bering." },
  { id: 8, savol: "Qo'l suyaklari necha qismdan tashkil topgan?" },
  { id: 9, savol: "Oyoq suyaklari necha qismdan tashkil topgan?" },
  { id: 10, savol: "Oyoqning erkin suyaklariga nimalar kiradi ?" },
  { id: 11, savol: "Yelka kamari suyaklariga nimalar kiradi ?" },
  { id: 12, savol: "Odam skleti qanday funksiyalarni bajaradi ?" },
  { id: 13, savol: "Suyakning vazifalari va uning joylashuvi." }
];


const App = () => {
  const [visible, setVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [Ids, setIds] = useState("");

  const handleButtonClick = (id) => {
    const question = questions.find(q => q.id === id)?.savol || "Savol topilmadi";
    setIds(id);
    setSelectedQuestion(question);
    setVisible(true);
  };

  return (
    <div className="container">
      <div className="sklet">
        <img src={image} alt="Skeleton" className="sklet" />
        <button onClick={() => handleButtonClick(1)} className="button button1">1</button>
        <button onClick={() => handleButtonClick(2)} className="button button2">2</button>
        <button onClick={() => handleButtonClick(3)} className="button button3">3</button>
        <button onClick={() => handleButtonClick(4)} className="button button4">4</button>
        <button onClick={() => handleButtonClick(5)} className="button button5">5</button>
        <button onClick={() => handleButtonClick(6)} className="button button6">6</button>
        <button onClick={() => handleButtonClick(7)} className="button button7">7</button>
        <button onClick={() => handleButtonClick(8)} className="button button8">8</button>
        <button onClick={() => handleButtonClick(9)} className="button button9">9</button>
        <button onClick={() => handleButtonClick(10)} className="button button10">10</button>
        <button onClick={() => handleButtonClick(11)} className="button button11">11</button>
        <button onClick={() => handleButtonClick(12)} className="button button12">12</button>
        <button onClick={() => handleButtonClick(13)} className="button button13">13</button>
      </div>


      <Rodal visible={visible} onClose={() => setVisible(false)} height={150} width={300}>
        <div className="text-rodal">
          <h3>{Ids + '-savol \n'} </h3>
          <br />
          {selectedQuestion}</div>
      </Rodal>
    </div>
  );
};

export default App;
