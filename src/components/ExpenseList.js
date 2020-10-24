import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Expense from './Expense'

const ExpenseList = () =>{
  const {transaction} = useContext(GlobalContext);
  console.log(transaction.expenses)
    return(
      <div>
          <h2>Expense List</h2>
          {transaction.expenses.map(expense =>{
              return(
                  <Expense key={expense.id} expense={expense} />
              )
          })}
      </div>
    
)}

export default ExpenseList;