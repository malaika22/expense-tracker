import React from 'react'; 


export default function Expense({expense}){
    return(
        <div>
            <p>{expense.expenseName} {expense.amount}</p>
        </div>
    )
}