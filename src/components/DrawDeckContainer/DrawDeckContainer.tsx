import { useState } from 'react';
import { ICard } from '../../types/card.types';
import { useGameContext } from '../../contexts';
import { DrawPile } from '../CardPiles';
import { FlippedPile } from '../CardPiles/FlippedPile';

interface IDrawDeckData {
    totalRemaining: number;
    totalFlipped: number;
    remainingCardList: [];
    revealedCardList: [];
}

interface IDrawDeckContainer {
    faceDownCards?: ICard[];
    faceUpCards?: ICard[];
}

export const DrawDeckContainer = ({ faceUpCards, faceDownCards  }: IDrawDeckContainer) => {
    return (
        <div className='flex'>
            <div>
                <DrawPile />
            </div>
            <div>
                <FlippedPile />
            </div>
        </div>
    )
}