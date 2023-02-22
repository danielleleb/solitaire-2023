export enum CardValueEnum {
    Ace = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13, 
}

export type Suit = 'spades' | 'hearts' | 'diamonds' | 'clubs';

export interface ICard {
    // id: string;
    suit: Suit;
    isFaceUp: boolean;
    value: CardValueEnum;
    isSelected: boolean;
    pile?: string;
    location?: {
        pile: string;
        // index: number;
    }
}