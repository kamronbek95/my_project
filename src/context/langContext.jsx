import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangContextProvider = ({children}) => {
    const [language, setLanguage] = useState(JSON.parse(localStorage.getItem('lang')) || 'ru')
    return(
        <LangContext.Provider value={{language, setLanguage}}>
            {children}
        </LangContext.Provider>
    )
}