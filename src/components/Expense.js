import React from 'react'; 


export default function Expense({expense}){
    return(
        <div>
            <p>{expense.transactionName} {expense.amount}</p>
        </div>
    )
}