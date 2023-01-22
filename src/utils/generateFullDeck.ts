import { ICard, Suit, CardValueEnum } from '../types/card.types';

export const generateFullDeck = (): ICard[] => {
    const suits: Suit[] = ['spades', 'hearts', 'diamonds', 'clubs'];
    const values: CardValueEnum[] = [
        CardValueEnum.Ace,
        CardValueEnum.Two,
        CardValueEnum.Three,
        CardValueEnum.Four,
        CardValueEnum.Five,
        CardValueEnum.Six,
        CardValueEnum.Seven,
        CardValueEnum.Eight,
        CardValueEnum.Nine,
        CardValueEnum.Ten,
        CardValueEnum.Jack,
        CardValueEnum.Queen,
        CardValueEnum.King,
    ];

    const deck: ICard[] = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push({
                suit: suits[i],
                value: values[j],
                isFaceUp: false,
                isSelected: false,
            });
        }
    }

    return deck;
}
