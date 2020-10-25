import React, { useContext } from 'react'; 
import {GlobalContext} from '../context/GlobalState'

export default function Income({income}){
    const {deleteIncome} = useContext(GlobalContext);
    return(
        <div>
            <p>{income.transactionName} {income.amount} <span onClick={() => deleteIncome(income.id)}> X </span></p>
        </div>
    )
}