import React, {createContext,useReducer} from 'react'; 
import AppReducer from './AppReducer';

const initialState = {
    transactions: {
        expenses: [{
            id: 1,
            transactionName: 'Chair',
            amount: 20,
            description: 'expense'
        }] ,
        incomes: [{
            id: 1,
            transactionName: 'Project',
            amount: 30,
            description: 'income'
        }]
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
    return(
        <GlobalContext.Provider value={{
            transaction: state.transactions,
            addTransaction: addTransaction
            }} >
            {children}
        </GlobalContext.Provider>
    );
}