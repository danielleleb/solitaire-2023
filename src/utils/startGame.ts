import { ICard, IGame } from '../types';
import { generateFullDeck } from './generateFullDeck';

const shuffleCards = (cards: ICard[]): ICard[] => {
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    return shuffledCards;
};

export const startGame = (): IGame => {
    const cards = shuffleCards(generateFullDeck());

    const game: IGame = {
        pile1: [],
        pile2: [],
        pile3: [],
        pile4: [],
        pile5: [],
        pile6: [],
        pile7: [],
        drawPile: [],
        flippedPile: [],
        topPile1: [],
        topPile2: [],
        topPile3: [],
        topPile4: [],
        selectedCard: null,
    };

    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= i; j++) {
            const card = cards.pop();
            // @ts-ignore-next-line
            card.location = {
                pile: `pile${i}`,
                index: j - 1,
            }
            // @ts-ignore-next-line
            game[`pile${i}`].push(card);
        }
        // @ts-ignore-next-line
        game[`pile${i}`][0].isFaceUp = true;
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].location = {
            pile: 'drawPile',
            index: i,
        }
    }

    game.drawPile = cards;
    console.log(game, 'game');
    return game;
};