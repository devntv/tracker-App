import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { TransactionList } from './TransactionList'

export const Transaction = () => {
    //const context = useContext(GlobalContext)
    const { transactions } = useContext(GlobalContext)
    //console.log(transactions)
    //console.log(context) --> console.log(context.transaction) = {transaction} ={object}
    function handleTransactionList(transactions) {
        return transactions.map((transaction) => (
            <TransactionList key={transaction.id} transaction={transaction} />
        ))
    }

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {handleTransactionList(transactions)}
            </ul>
        </>
    )
}
