import { useEffect, useState } from "react";
import { ICard, IGame, IGameContext } from "../types";
import { startGame } from "../utils";

export const useGame = (): IGameContext => {
    const [game, setGame] = useState<IGame>(startGame);

    const flipCard = (card: ICard) => {
        return {
            ...card,
            isFaceUp: true,
        }
    }

    const handleCardClick = (card: ICard) => {
        // @ts-ignore-next-line 
        if (!card.isFaceUp && !card.location.pile.includes('draw')) {
            // @ts-ignore-next-line 
            const flippedCard = game[card.location.pile].shift();
            // @ts-ignore-next-line 
            game[card.location.pile].unshift(flipCard(flippedCard));
            setGame({
                ...game,
            })
        } else if (game.selectedCards.length) {
            console.log(game.selectedCards, 'selectedcards')
            // check if selectedcard can be dropped on this card
            if (card.value === game.selectedCards[game.selectedCards.length - 1].value + 1) {
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
        const cards = game.selectedCards;
        if (!cards.length) return;
        updateCardsOnDrop(cards)
        game.selectedCards = [];
        setGame({
            ...game,
        })
    }

    const updateCardsOnDrop = (cards: ICard[], pile?: string) => {
        cards.forEach((card) => {
            card.isSelected = false;
            if (pile) {
                card.location = {
                    pile,           
                }
            }
        })
    }

    const handleCardDrop = (pile: string) => {
        const cards = game.selectedCards;

        if (!cards.length) return;

        // @ts-ignore-next-line 
        const pileToRemoveFrom = game[cards[0].location.pile];


        pileToRemoveFrom.splice(pileToRemoveFrom.indexOf(cards[0]), cards.length);

        // @ts-ignore-next-line 
        game[pile].unshift(...cards);


        updateCardsOnDrop(cards, pile);

        game.selectedCards = [];

        setGame({
            ...game
        });
    }


    const handleDropCardOnEmptyPile = (pile: string) => {
        const cards = game.selectedCards;

        if (pile.includes('top') && (cards.length !== 1 || cards[0]?.value !== 1)) return; // todo unselect card
        const nonallowedPiles = ['drawPile', 'flippedPile', 'topPile1', 'topPile2', 'topPile3', 'topPile4'];
        if (!nonallowedPiles.includes(pile) && cards[cards.length - 1]?.value === 13) {
            handleCardDrop(pile);
        }

        // handleCardDrop(pile);
    }

    const unselectCards = (cards: ICard[]) => {
        cards.forEach(card => {
            card.isSelected = false;
        })
    }

    const selectCard = (card: ICard) => {
        if (game.selectedCards.length) {
            unselectCards(game.selectedCards);
        }
        // unselect every other card 
        if (!card.isFaceUp) return;
        // @ts-ignore-next-line 
        const pile = game[card.location.pile];
        const clickedCardIndex = pile?.indexOf(card);

        let cardsToSelect = [];
        for (let i = 0; i <= clickedCardIndex; i++) {
            // @ts-ignore-next-line
            console.log(pile[i], 'pile')
            // @ts-ignore-next-line
            cardsToSelect.push(pile[i]);
            pile[i].isSelected = true;
        }
        setGame({
            ...game,
            selectedCards: [...cardsToSelect],
        })
    }

    useEffect(() => {
        // console.log(JSON.stringify(game), '5updatedgame')
        // console.log(JSON.stringify(game, null, 2), '5updatedgame')
    }, [game])

    const flipDrawDeckCard = () => {
        const card = game.drawPile.pop();

        if (card) {
            card.location = {
                pile: 'flippedPile',
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