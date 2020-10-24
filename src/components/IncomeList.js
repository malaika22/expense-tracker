import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Income from './Income'

const IncomeList = () =>{
    const {transaction} = useContext(GlobalContext);
    console.log(transaction.incomes)
      return(
        <div>
            <h2>Income List</h2>
            {transaction.incomes.map(income =>{
                return(
                    <Income key={income.id} income={income} />
                    
                )
            })}
        </div>
      );
}


export default IncomeList;