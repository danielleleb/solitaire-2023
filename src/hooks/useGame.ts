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

    const handleDropCardOnEmptyPile = (card: ICard, pile: string) => {
        // check if pile is empty
        // remove card from current pile
        // add that card to the pile
        // set the card's location to the pile
        // set the card as unselected

        // @ts-ignore-next-line 
        const pileToRemoveFrom = game[card.location.pile];

        // @ts-ignore-next-line 
        pileToRemoveFrom.splice(card.location.index, 1);

        // @ts-ignore-next-line 
        game[pile].unshift(card);

        card.location = {
            pile: ,
        }
    }

    useEffect(() => {
        // find the prev selected card and unselect it 
    }, [game.selectedCard])

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
        selectCard
    }

};