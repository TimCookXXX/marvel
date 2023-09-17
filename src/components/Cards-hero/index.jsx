import Card from '../Card';
import { useContext } from 'react';
import { CardContext } from '../../context/Card';

const CardsHero = () => {
    const { cardData } = useContext(CardContext)
    return (
        <>
            {cardData.map((card) => {
                return (
                    <Card key={card.id} card={card} />
                )
            })}
        </>
    )
}

export default CardsHero;