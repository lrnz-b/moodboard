export interface CardProperties {
  id: number;
  url: string;
}

export interface CardImageProps {
  card: CardProperties;
}

export interface CardProps extends CardImageProps {
  cards: CardProperties[];
  setCards: React.Dispatch<React.SetStateAction<CardProperties[]>>;
}