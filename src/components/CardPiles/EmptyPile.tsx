import { useGameContext } from "../../contexts";

export interface IEmptyPile {
    onClick?: () => void;
    pileId: string;
}

export const EmptyPile = ({pileId}: IEmptyPile) => {
    const { handleDropCardOnEmptyPile } = useGameContext();

    return (
        <div onClick={() => handleDropCardOnEmptyPile(pileId)} className="border border-red-500 w-24 h-32">

        </div>
    )

}