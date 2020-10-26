import React, {createContext,useReducer} from 'react'; 
import AppReducer from './AppReducer';

const initialState = {
    transactions: {
        expenses: [] ,
        incomes: []
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
   
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function deleteExpense(id){
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }
    function deleteIncome(id){
        dispatch({
            type: 'DELETE_INCOME',
            payload: id
        })
    }
    return(
        <GlobalContext.Provider value={{
            transaction: state.transactions,
            addTransaction: addTransaction,
            deleteExpense: deleteExpense,
            deleteIncome: deleteIncome
            }} >
            {children}
        </GlobalContext.Provider>
    );
}