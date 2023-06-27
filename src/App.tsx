import { useState, useEffect } from 'react';
import { CardProperties } from './interface/interface.ts';
import Card from './components/Card';
import './App.css';

function App() {
  const [ cards, setCards ] = useState<CardProperties[]>([]);

  useEffect(() => {
    const IMAGE_COUNT = 10;
    const cardArr = [];
    for (let i = 0; i < IMAGE_COUNT; i++) {
      cardArr.push({ 
        id: Date.now() + i, 
        url: `https://picsum.photos/seed/${Date.now() + i}/200/300`
      });
    }
    setCards(cardArr);
  }, []);

  return (
    <ul className='cards'>
      {cards.map(card => 
        <Card card={card} cards={cards} setCards={setCards} key={card.id}/>
      )}
    </ul>
  );
}

export default App;
