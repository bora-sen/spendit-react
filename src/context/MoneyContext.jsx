import React from 'react';

export const MoneyContext = React.createContext();

export const MoneyContextProvider = ({children}) => {
    const [money,setMoney] = React.useState(1000);
    let global_var = {
        money:money,
        setMoney:setMoney
    }
    return (
        <MoneyContext.Provider value={global_var}>
            {children}
        </MoneyContext.Provider>
    )
};