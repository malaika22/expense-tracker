import React, { useContext } from 'react'; 
import {GlobalContext} from '../context/GlobalState'

export default function Income({income}){
    const {deleteIncome} = useContext(GlobalContext);
    return(
        <li className='incomeItem item'>
            {income.transactionName} <span className='transaction-amount'>{income.amount}</span>   <span onClick={() => deleteIncome(income.id)} className='delete-btn'> <i className="fas fa-times"></i> </span> 
        </li>
    )
}