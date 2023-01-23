import { TopPile } from "../CardPiles/TopPile"

export const TopPileContainer = () => {
    return (
        <div className='flex'>
            <TopPile pileId={'topPile1'}/>
            <TopPile pileId={'topPile2'}/>
            <TopPile pileId={'topPile3'}/>
            <TopPile pileId={'topPile4'}/>
        </div>
    )
}