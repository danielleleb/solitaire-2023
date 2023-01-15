import { useState } from 'react';
import { Card } from '../Card';

interface HiddenCardPileProps {
    onClick?: () => void;
}
export const HiddenCardPile = ({
    onClick
}: HiddenCardPileProps) => {
    const [remainingCards, setRemainingCards] = useState({
        totalRemaining: 0,
        totalFlipped: 0,
        // nextCard: null,
        remainingCardList: [],
        revealedCardList: [],
    });
    const handleClick = () => {
        // setRemainingCards((currentState) => {
        //     total: currentState.total - 1,
        //     remainingCardList: 
        // })
    };

    

    return (
        <div onClick={() => handleClick()}>
            <Card></Card>
        </div>
    )
}


export const DrawDeckContainer = () => {

    return (
        <div>
            <div>
                {/* HiddenCardPile */}
                <HiddenCardPile
                    // onClick={() => {}}
                />
            </div>
            <div>
                {/* RevealedCardPile */}
                
            </div>
        </div>
    )
}