import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = ({transaction, }) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const Equal = transaction.amount < 0 ? '-' : '+' 
    return (
        <li className={transaction.amount < 0 ? 'minus': 'plus'} >
            {transaction.text} <span>{Equal}${Math.abs(transaction.amount)}
            </span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
