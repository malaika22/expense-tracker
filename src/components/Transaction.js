import React, { useContext, useState } from 'react'; 
import {GlobalContext} from '../context/GlobalState';
 const Transaction = () => {
     const [text,setText] = useState('');
     const [amount,setAmount] = useState(0);
     const [description,setDescription] = useState('expense');
     const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random() * 100000000),
            transactionName:text,
            amount: parseInt(amount),
            description: description
        }
        addTransaction(newTransaction)
    }
    return(
        <>
             <h2>Add Transaction</h2>
             <form onSubmit={onSubmit}>
                 <h1>Text</h1>
                 <input type='text' value={text} placeholder='Enter Transaction....' name='transaction' onChange={(e) => setText(e.target.value)}/>
                 <h1>Amount</h1>
                 <input type='number' value={amount} placeholder='Enter Transaction Amount' name='transaction-amount' onChange= {(e)=> setAmount(e.target.value)}/>
                 <h1>Description</h1>
                 <select type='select' value={description} name='description' onChange={(e) => setDescription(e.target.value)}>
                     <option  value='expense'  >Expense</option>
                     <option  value='income' >Income</option>
                 </select>
                 <input type='submit' value='Add Transaction' />
             </form>
        </>
       
    )
}


export default Transaction;