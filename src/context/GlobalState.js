import React, {createContext,useReducer} from 'react'; 
import AppReducer from './AppReducer';

const initialState = {
    transactions: {
        expenses: [{
            id: 1,
            expenseName: 'Chair',
            amount: 20,
            description: 'expense'
        }] ,
        incomes: [{
            id: 1,
            incomeName: 'Project',
            amount: 30,
            description: 'income'
        }]
    }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={{
            transaction: state.transactions
            }} >
            {children}
        </GlobalContext.Provider>
    );
}