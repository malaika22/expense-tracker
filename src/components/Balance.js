import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Balance(){
    const {transaction} =useContext(GlobalContext);

    const expenseAmounts= transaction.expenses.map(expense => expense.amount);
    const incomeAmounts= transaction.incomes.map(income => income.amount);
    const income= incomeAmounts.reduce((acc,curr) => (acc+curr), 0).toFixed(2);
    const expense= expenseAmounts.reduce((acc,curr) => (acc+curr), 0).toFixed(2);
    
    const balance= income-expense;
    
    console.log(expenseAmounts)
    return(
        <div className='balance-container' >
            <h2 className='balance-heading'>Balance: <span className='dollar-sign'>${balance}</span></h2>
        </div>
    )
}