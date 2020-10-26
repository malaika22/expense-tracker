import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Income from './Income'

const IncomeList = () =>{
    const {transaction} = useContext(GlobalContext);
    console.log(transaction.incomes)
      return(
        <div className='incomeList transaction'>
            <h3 className='incomeList-heading transactions-heading'>Income List</h3>
            <ul className='incomes list'>
            {transaction.incomes.map(income =>{
                return(
                    <Income key={income.id} income={income} />
                    
                )
            })}
            </ul>
           
        </div>
      );
}


export default IncomeList;