import { CardProps } from "../interface/interface";

const CardContent = ({ card, cards, setCards }: CardProps) => {

  const getCardIdx = () => {
    return cards.findIndex(x => x.id === card.id);
  }

  const swap = (nextIdx: number) => {
    const cardArr = [...cards];
    const idx = getCardIdx();

    cardArr.splice(idx, 1, cardArr[nextIdx]);
    cardArr.splice(nextIdx, 1, card);

    setCards(cardArr);
  }

  const swapLeftHandler = () => {
    const cardIdx = getCardIdx();

    if (cardIdx === 0) {
      return; 
    }

    swap(getCardIdx() - 1);
  }

  const swapRightHandler = () => {
    const cardIdx = getCardIdx();

    if (cardIdx === cards.length - 1) {
      return; 
    }
    
    swap(getCardIdx() + 1);
  }

  return (
    <div className='card_content'>
      <button className='left' onClick={swapLeftHandler}>Left</button>
      <button className='right' onClick={swapRightHandler}>Right</button>
    </div>
  );
}

export default CardContent;