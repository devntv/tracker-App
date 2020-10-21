import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map((transaction) =>  transaction.amount );
    console.log(amount)
    //const total = amount.reduce((money, item) =>  {return money + item} , 0).toFixed(2); can write like this
    const total = amount.reduce((money, item) =>  (money + item) , 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}
