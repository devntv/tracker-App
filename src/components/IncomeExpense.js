import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amounst = transactions.map((transaction) => (transaction.amount));
    // const total = amounst.reduce((money,item)=>(money + item),0).toFixed(2);
    const incom = amounst.filter(item => item > 0).reduce((money, item) => (money + item), 0).toFixed(2);
    const expense = (amounst.filter(item => item < 0).reduce((money, item) => (money + item), 0) * -1).toFixed(2);
    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">{incom}$</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">{expense}$</p>
                </div>
            </div>
        </>
    )
}
