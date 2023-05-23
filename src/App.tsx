import "./App.css";
import { useEffect, useState } from "react";
import { ReactComponent as RemoveIcon } from "./assets/icons8-close.svg";
import { AppContainer } from "./app.styled";

function App() {
  const savedCards = localStorage.getItem("cards");
  const initialCards = savedCards ? JSON.parse(savedCards) : [];

  const [cards, setCards] = useState<number[]>(initialCards);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const generateRandomUniqueNumber = (): number => {
    let randomNum = Math.floor(Math.random() * 100);
    while (cards.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * 100);
    }
    return randomNum;
  };

  const handleAddCard = () => {
    const randomNum = generateRandomUniqueNumber();
    setCards([...cards, randomNum]);
  };

  const handleSortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a - b);
    setCards(sortedCards);
  };

  const handleRemoveCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <AppContainer className="App">
      <div className="mainContent">
        <header className="header">
          <button className="btn" onClick={handleAddCard}>Add card</button>
          <button className="btn" onClick={handleSortCards}>Sort cards</button>
        </header>
        <main className="main">
          {cards.map((card, index) => (
            <div key={index} className="card">
              {card}
              <RemoveIcon
                className="removeIcon"
                onClick={() => handleRemoveCard(index)}
              />
            </div>
          ))}
        </main>
        <footer className="footer">Footer</footer>
      </div>
      <div className="instructionBlock">
        <aside className="aside">
          <p className="instructionText">
          Press the "Add card" button to add the new Card. Use the "sort cards"
          button to sort the Cards by the increase. Press an X icon on the top
          right to delete them.
          </p>
        </aside>
      </div>
    </AppContainer>
  );
}

export default App;
