import React from 'react';
import { ICard } from '../../types';
import { useGameContext } from '../../contexts';
import cs from 'classnames';

export const Card = ({ card }: { flipped?: boolean, card?: ICard }) => {
    const { selectCard } = useGameContext();
    const suitIcon = () => {
        switch (card?.suit) {
            case 'hearts':
                return '♥';
            case 'diamonds':
                return '♦';
            case 'spades':
                return '♠';
            case 'clubs':
                return '♣';
            default:
                return '';
        }
    }

    const cardValue = () => {
        switch (card?.value) {
            case 1: 
                return 'A';
            case 2:
                return '2';
            case 3:
                return '3';
            case 4:
                return '4';
            case 5:
                return '5';
            case 6:
                return '6';
            case 7:
                return '7';
            case 8:
                return '8';
            case 9:
                return '9';
            case 10:
                return '10';
            case 11:
                return 'J';
            case 12:
                return 'Q';
            case 13:
                return 'K';
            default:
                return '';
        }
    }
    return (
        <>
        {!card?.isFaceUp ? (
            // <div className='bg-yellow-300 w-24 h-32 border rounded'></div>
            <div className={cs('bg-yellow-300 w-24 h-32 border rounded')}></div>
            ) : (
            <div onClick={() => selectCard(card)} className={cs('w-24 h-32 border rounded', {
                'border-emerald-300': card.isSelected
            })}>
                {suitIcon()}
                {cardValue()}
            </div>
        )
        }
        </>
    )
}