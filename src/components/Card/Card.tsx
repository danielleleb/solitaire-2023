import React from 'react';
import { ICard } from '../../types';
import { useGameContext } from '../../contexts';
import cs from 'classnames';

interface ICardProps extends React.HTMLProps<HTMLDivElement> {
    flipped?: boolean;
    card?: ICard;

}

export const Card = ({ card, className, style }: ICardProps) => {
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
        {/* <div className={cs('w-24 h-32 border rounded', className)}> */}
        {!card?.isFaceUp ? (
            <div style={style} className={cs(' bg-yellow-300 w-24 h-32 border border-black rounded min-w-min', className)}></div>
            ) : (
            <div style={style} onClick={() => selectCard(card)} className={cs(' bg-white min-w-min w-24 h-32 border rounded', className, {
                'border-emerald-300': card.isSelected,
                'border-black': !card.isSelected
            })}>
                {suitIcon()}
                {cardValue()}
            </div>
        )
        }
        {/* </div> */}
        </>
    )
}