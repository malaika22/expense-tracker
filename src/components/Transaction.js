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
        <div className='transaction-container'>
             <h2 className='transaction-heading'>Add Transaction</h2>
             <form onSubmit={onSubmit}>
                 <div className='form'>
                    <div className='form-group'>
                        <labels className='form-labels'>Text: </labels>
                        <input className='form-control' autoComplete='off' 
                            type='text' 
                            value={text} placeholder='Enter Transaction....' 
                            name='transaction' 
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <labels className='form-labels'>Amount: </labels>
                        <input className='form-control' 
                            type='number' value={amount} placeholder='Enter Transaction Amount' 
                            name='transaction-amount' 
                            onChange= {(e)=> setAmount(e.target.value)}
                        />
                    </div>
                    <div className='form-group select'>
                        <labels className='form-labels'>Description: </labels>
                        <select className='selectTransaction' type='select' value={description} name='description' onChange={(e) => setDescription(e.target.value)}>
                            <option className='transactionOption' value='expense'  >Expense</option>
                            <option className='transactionOption' value='income' >Income</option>
                        </select>
                    </div>
                 </div> 
                 <input type='submit' value='Add Transaction' className='transaction-btn' />
             </form>
        </div>
       
    )
}


export default Transaction;