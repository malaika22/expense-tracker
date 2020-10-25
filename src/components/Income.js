import React from 'react'; 


export default function Income({income}){
    return(
        <div>
            <p>{income.transactionName} {income.amount}</p>
        </div>
    )
}