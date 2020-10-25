import React, { useContext } from 'react'; 
import {GlobalContext} from '../context/GlobalState';


export default function Expense({expense}){
    const {deleteExpense} = useContext(GlobalContext);
    console.log(expense)
    return(
        <div>
            <p>{expense.transactionName} {expense.amount} <span onClick={()=> deleteExpense(expense.id)}>X</span></p>
        </div>
    )
}