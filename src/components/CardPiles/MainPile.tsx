import { useGameContext } from "../../contexts";
import { EmptyPile } from "./EmptyPile"
import { Card } from '../Card';
import { ICard } from "../../types";
interface IMainPile {
    pileId: string;
}

export const MainPile = ({ pileId }: IMainPile) => {
    const { game, handleDropCardOnEmptyPile } = useGameContext();

    // @ts-ignore-next-line
    const pile = game[pileId]; 

    return (
        <div className="m-1 w-24 relative flex flex-col">
            {
                pile.length ? (
                    pile.map((card: ICard, index: number) => {
                        // const zIndex = `z-[${pile.length - index}]`;
                        let zIndex = 'z-[20]';
                        let topDistance = 'top-[200px]';
                        const arrayLength = pile.length;
                        let distance = (arrayLength - index) * 20;
                        switch (index) {
                            case 0:
                                zIndex = 'z-[20]';
                                topDistance = 'top-[0px]'
                                break;
                            case 1:
                                zIndex = 'z-[19]';
                                topDistance = 'top-[20px]'
                                break;
                            case 2:
                                zIndex = 'z-[18]';
                                topDistance = 'top-[40px]'
                                break;
                            case 3:
                                zIndex = 'z-[17]';
                                topDistance = 'top-[60px]'
                                break;
                            case 4:
                                zIndex = 'z-[16]';
                                topDistance = 'top-[80px]'
                                break;
                            case 5:
                                zIndex = 'z-[15]';
                                topDistance = 'top-[100px]'
                                break;
                            case 6:
                                zIndex = 'z-[14]';
                                topDistance = 'top-[120px]'
                                break;
                            case 7:
                                zIndex = 'z-[13]';
                                topDistance = 'top-[140px]'
                                break;
                            case 8:
                                zIndex = 'z-[12]';
                                topDistance = 'top-[160px]'
                                break;
                            case 9:
                                zIndex = 'z-[11]';
                                topDistance = 'top-[180px]'
                                break;
                            case 10:
                                zIndex = 'z-[10]';
                                topDistance = 'top-[200px]'
                                break;
                        }
                        return (
                            <Card
                                style={{ top: `${distance}px` } }
                                className={`absolute ${zIndex}`}
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