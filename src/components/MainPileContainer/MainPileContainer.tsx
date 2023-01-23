import { MainPile } from "../CardPiles/MainPile"

export const MainPileContainer = () => {
    return (
        <div className='flex'>
                <MainPile pileId="pile1"/>
                <MainPile pileId="pile2"/>
                <MainPile pileId="pile3"/>
                <MainPile pileId="pile4"/>
                <MainPile pileId="pile5"/>
                <MainPile pileId="pile6"/>
                <MainPile pileId="pile7"/>
        </div>
    )
}