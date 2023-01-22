import { useGameContext } from '../../contexts';
import { Card } from '../Card/Card';
import { EmptyPile } from './EmptyPile';

export const FlippedPile = () => {
    const { game } = useGameContext();

    return (
        <div className='m-1'>
            {/* <div>
                suit: {game.flippedPile[0]?.suit}
                value: {game.flippedPile[0]?.value}
    -----
                length: {game.flippedPile.length}
            </div> */}
            {
                !game.flippedPile.length ? (
                    <EmptyPile />
                ) : (
                    <Card
                        card={game.flippedPile[0]}
                    />
                )
            }

        </div>
    )
}