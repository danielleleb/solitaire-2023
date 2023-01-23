import { useGameContext } from "../../contexts";
import { EmptyPile } from "./EmptyPile"
import { Card } from '../Card';
import { ICard } from "../../types";
interface ITopPile {
    pileId: string;
}

export const TopPile = ({ pileId}: ITopPile) => {
    const { game, handleDropCardOnEmptyPile } = useGameContext();

    // @ts-ignore-next-line
    const pile = game[pileId];

    return (
        <div className="m-1">
            {
                pile.length ? (
                    pile.map((card: ICard, index: number) => {
                        return (
                            <Card
                                key={index}
                                card={card}
                            />
                        )
                    })
                ) : (
                    <EmptyPile pileId={pileId} />
                )
            }
        </div>
    )
}