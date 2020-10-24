import React from 'react'; 


export default function Income({income}){
    return(
        <div>
            <p>{income.incomeName} {income.amount}</p>
        </div>
    )
}