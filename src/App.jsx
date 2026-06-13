import { useState } from "react";
import "./App.css";
import { cardData } from "./cardData";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [openedCards, setOpenedCards] = useState([]);

  const handleSelect = (index) => {
    setSelectedCard((prev) => (prev === index ? null : index));
  };

  const handleOpen = () => {
    if (selectedCard === null) return;

    // 이미 열린 카드면 추가 안 함
    if (openedCards.includes(selectedCard)) return;

    setOpenedCards((prev) => [...prev, selectedCard]);
  };

  return (
    <div className="app">
      <div className="overlay">
        <header className="hero">
          <h1>✨ Insight Cards ✨</h1>
          <h2>나를 알아가는 여정의 시작</h2>
          <p>카드를 선택하고 당신의 내면의 목소리에 귀 기울여보세요</p>
        </header>

        <section className="intro-box align-items-center">
          <p className="m-0">
            12개의 카드 중 하나를 선택하면, 당신의 내면을 탐구하는 깊이 있는
            질문이 나타납니다.
          </p>
        </section>

        <div className="card-container">
          <div className="card-list">
            {cardData.map((card, index) => {
              const isSelected = selectedCard === index;
              const isOpened = openedCards.includes(index);

              return (
                <div
                  key={index}
                  className={`tarot-card
                  ${isSelected ? "selected" : ""}
                  ${isOpened ? "opened" : ""}
                `}
                  onClick={() => handleSelect(index)}
                >
                  <div className="card-inner">
                    <div className="card-back"></div>
                    <div
                      className="card-front"
                      style={{
                        backgroundImage: `url(${card.img})`,
                      }}
                    >
                      <h4>{card.title}</h4>
                      <p>{card.question}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedCard !== null && !openedCards.includes(selectedCard) && (
          <button className="open-btn" onClick={handleOpen}>
            카드 열기
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
