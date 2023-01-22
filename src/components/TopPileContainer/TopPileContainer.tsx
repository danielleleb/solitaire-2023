import { TopPile } from "../CardPiles/TopPile"

export const TopPileContainer = () => {
    return (
        <div className='flex'>
            <TopPile/>
            <TopPile/>
            <TopPile/>
            <TopPile/>
        </div>
    )
}