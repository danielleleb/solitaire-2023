import { useCallback, useEffect, useMemo, useState } from "react";
import { ICard, IGame, IGameContext } from "../types";
import { generateFullDeck, startGame } from "../utils";

export const useGame = (): IGameContext => {
    console.log('use game called')
    const [game, setGame] = useState<IGame>(startGame);

    const flipCard = (card: ICard) => {
        return {
            ...card,
            isFaceUp: true,
        }
    }

    const dropCardOnAnotherCard = (pile: string) => {

    }



    const handleCardClick = (card: ICard) => {
        // @ts-ignore-next-line 
        if (!card.isFaceUp && !card.location.pile.includes('draw')) {
            console.log('MADE IT IN')
            // @ts-ignore-next-line 
            const flippedCard = game[card.location.pile].shift();
            // @ts-ignore-next-line 
            game[card.location.pile].unshift(flipCard(flippedCard));
            setGame({
                ...game,
            })
        } else if (game.selectedCard) {
            // check if selectedcard can be dropped on this card
            if (card.value === game.selectedCard.value + 1) {
                // @ts-ignore-next-line 
                handleCardDrop(`${card.location.pile}`);
            } else {
                unselectCard();
            }
        } else {
            selectCard(card);
        }


    }

    const unselectCard = () => {
        const card = game.selectedCard;
        if (!card) return;
        card.isSelected = false;
        game.selectedCard = null;
        setGame({
            ...game,
        })
    }

    const handleCardDrop = (pile: string) => {
        const card = game.selectedCard;
        console.log(card, 'card')

        if (!card) return;
        // @ts-ignore-next-line 
        const pileToRemoveFrom = game[card.location.pile];
        console.log(pileToRemoveFrom, 'pileToRemoveFrom')


        // @ts-ignore-next-line 
        pileToRemoveFrom.splice(pileToRemoveFrom.indexOf(card), 1);
        // pileToRemoveFrom.splice(card.location.index, 1);

        // @ts-ignore-next-line 
        game[pile].unshift(card);

        card.location = {
            pile,
            index: 0,
        }
        

        card.isSelected = false;

        game.selectedCard = null;

        setGame({
            ...game
        });
    }


    const handleDropCardOnEmptyPile = (pile: string) => {
        const card = game.selectedCard;
        if (pile.includes('top') && card?.value !== 1) return; // todo unselect card
        const nonallowedPiles = ['drawPile', 'flippedPile', 'topPile1', 'topPile2', 'topPile3', 'topPile4'];
        if (!nonallowedPiles.includes(pile) && card?.value === 13) return;

        handleCardDrop(pile);
        // const card = game.selectedCard;

        // if (!card) return;
        // // @ts-ignore-next-line 
        // const pileToRemoveFrom = game[card.location.pile];

        // // @ts-ignore-next-line 
        // pileToRemoveFrom.splice(card.location.index, 1);

        // // @ts-ignore-next-line 
        // game[pile].unshift(card);

        // card.location = {
        //     pile,
        //     index: 0,
        // }

        // card.isSelected = false;

        // setGame({
        //     ...game
        // });
    }

    useEffect(() => {
        // find the prev selected card and unselect it 
        console.log(game, 'game update')
    }, [game])

    const selectCard = (card: ICard) => {
        if (game.selectedCard) {
            game.selectedCard.isSelected = false;
        }
        // unselect every other card 
        if (!card.isFaceUp) return;
        card.isSelected = true;
        setGame({
            ...game,
            selectedCard: card,
        })
    }

    useEffect(() => {console.log(JSON.stringify(game.flippedPile), '5updatedgame')}, [game])

    const flipDrawDeckCard = () => {
        // console.log(JSON.stringify(game.flippedPile), '1game outside setstate')
        const card = game.drawPile.pop();
        // console.log(JSON.stringify(card), '3popped card')
        if (card) {
            card.location = {
                pile: 'flippedPile',
                index: 0,
            }
            game.flippedPile.unshift(flipCard(card));
        }
        setGame({
            ...game,
        })
    }

    return {
        setGame,
        game,
        flipDrawDeckCard,
        selectCard,
        handleDropCardOnEmptyPile,
        handleCardClick,
    }

};