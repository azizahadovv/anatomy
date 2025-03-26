import React, { useState, useRef } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import image from "./assets/image.png";
import aud from "./assets/audio.mp3";

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
  const audioRef = useRef(null);
  const audioTimeoutRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Audio boshidan boshlanadi
      audioRef.current.play().catch(error => {
        console.warn("Autoplay bloklandi: ", error);
      });

      // Har 10 sekunddan keyin qayta ishlash uchun timeout
      clearTimeout(audioTimeoutRef.current);
      audioTimeoutRef.current = setTimeout(() => {
        playAudio();
      }, 10000);
    }
  };

  const handleButtonClick = (id) => {
    const question = questions.find(q => q.id === id)?.savol || "Savol topilmadi";
    setIds(id);
    setSelectedQuestion(question);
    setVisible(true);
    playAudio();
  };

  return (
    <div className="container">
      {/* Loop o'chirildi */}
      <audio hidden ref={audioRef} src={aud}></audio>

      <div className="sklet">
        <img src={image} alt="Skeleton" className="sklet" />
        {questions.map(({ id }) => (
          <button key={id} onClick={() => handleButtonClick(id)} className={`button button${id}`}>
            {id}
          </button>
        ))}
      </div>

      <Rodal visible={visible} onClose={() => setVisible(false)} height={150} width={300}>
        <div className="text-rodal">
          <h3>{Ids + "-savol \n"}</h3>
          <br />
          {selectedQuestion}
        </div>
      </Rodal>
    </div>
  );
};

export default App;
