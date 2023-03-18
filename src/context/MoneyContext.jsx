import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const MoneyContext = React.createContext();

export const MoneyContextProvider = ({children}) => {
    const [money,setMoney] = useState(10000);
    const [products,setProducts] = useState();

    useEffect(() => {
        async function getData(){
            let resp = await axios.get('https://dummyjson.com/products?limit=30');
            setProducts(resp.data)
        }
        getData();
    },[])


    function spendMoney(amount){
        let answer = money - amount;

        if(answer < 0 ){
            return
        }
        else {
            setMoney(prev => prev -= amount);
            return true
        }
    }
    function gainMoney(amount){
        setMoney(prev => prev += amount);
        return true
    }


    const data = {
        money,
        spendMoney,
        gainMoney,
        products
    }
    return (
        <MoneyContext.Provider value={data}>
            {children}
        </MoneyContext.Provider>
    )
};