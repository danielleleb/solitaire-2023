import { ICard } from '../../types/card.types';
import { Card } from '../Card';
import { useGameContext } from '../../contexts';

interface DrawPileProps {
    onClick?: () => void;
    cards?: ICard[];
}

export const DrawPile = ({
    cards
}: DrawPileProps) => {
    const { game, flipDrawDeckCard } = useGameContext();
    const { drawPile, } = game;

    const handleClick = () => {
        flipDrawDeckCard();
    };


    return (
        <div 
            className='m-1'
            onClick={() => handleClick()}
        >
            {/* <span>
                suit: {drawPile[drawPile.length -1 ]?.suit}
                value: {drawPile[drawPile.length -1 ]?.value}
            -----
                length: {game.drawPile.length}
            </span> */}

            <Card
                card={drawPile[drawPile.length -1 ]}
            />
        </div>
    )
}