import { CardProps } from '../interface/interface';
import CardImage from './CardImage';
import CardContent from './CardContent';

const Card = ({ card, cards, setCards }: CardProps) => {
  return (
    <li className='cards_item'>
      <div className='card'>
        <CardImage card={card} />
        <CardContent card={card} cards={cards} setCards={setCards} />
      </div>
    </li>  
  );
}

export default Card;