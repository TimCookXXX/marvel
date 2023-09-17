import { createContext, useState } from "react";
import DATA from '../../data.json';

export const CardContext = createContext({
    cardData: [],
    setCardData: () => {}
})

export const CardProvider = ({ children }) => {
    const [cardData, setCardData] = useState(DATA)
    const value = { cardData, setCardData }

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}