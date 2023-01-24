import { ICard } from './card.types';

export interface IGame {
    // pileX should be an array with 1-7 cards, only 1 card is face up
    pile1: ICard[];
    pile2: ICard[];
    pile3: ICard[];
    pile4: ICard[];
    pile5: ICard[];
    pile6: ICard[];
    pile7: ICard[];
    // topPileX should be an array with 0 cards to start
    topPile1: ICard[];
    topPile2: ICard[];
    topPile3: ICard[];
    topPile4: ICard[];
    // drawPile should be an array of all non-dealt cards, face down
    drawPile: ICard[];
    // flippedPile should be an array of all cards that have been flipped from drawPile
    flippedPile: ICard[];
    selectedCard: ICard | null;
}

export interface IGameContext {
    game: IGame;
    setGame: (game: IGame) => void;
    flipDrawDeckCard: () => void;
    selectCard: (card: ICard) => void;
    handleDropCardOnEmptyPile: (pile: string) => void;
    handleCardClick: (card: ICard) => void;
}