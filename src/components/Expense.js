import React, { useContext } from 'react'; 
import {GlobalContext} from '../context/GlobalState';


export default function Expense({expense}){
    const {deleteExpense} = useContext(GlobalContext);
    console.log(expense)
    return(
        <li className='expenseItem item'>
           <span className='itemName'>{expense.transactionName}</span> <span className='transaction-amount'>{expense.amount}</span> <span className='delete-btn' onClick={()=> deleteExpense(expense.id)}><i className="fas fa-times"></i></span>
        </li>
    )
}