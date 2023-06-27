import { CardImageProps } from "../interface/interface";

const CardImage = ({ card }: CardImageProps) => {
  return (
    <div className='card_image'>
      <img src={card.url} />
    </div>  
  );
}

export default CardImage;