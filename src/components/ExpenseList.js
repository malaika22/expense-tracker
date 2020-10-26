import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Expense from './Expense'

const ExpenseList = () =>{
  const {transaction} = useContext(GlobalContext);
  console.log(transaction.expenses)
    return(
      <div className='expenseList transaction'>
          <h3 className='expenseList-heading transactions-heading'>Expense List</h3>
          <ul className='expenses list'>
            {transaction.expenses.map(expense =>{
                return(
                    <Expense key={expense.id} expense={expense} />
                )
            })}
          </ul>
         
      </div>
    
)}

export default ExpenseList;