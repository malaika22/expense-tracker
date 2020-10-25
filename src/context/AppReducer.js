import React from 'react'; 

export default function AppReducer (state,action){
    switch(action.type){
        case 'ADD_TRANSACTION':
            if(action.payload.description === 'expense'){
                return {
                    ...state,
                    transactions: {
                        ...state.transactions, 
                        expenses: [action.payload, ...state.transactions.expenses]
                    }
                } 
            }          
            else if(action.payload.description === 'income') {
                return{
                    ...state,
                    transactions: {
                        ...state.transactions, 
                        incomes: [action.payload, ...state.transactions.incomes]
                    }
                }
            }
            
        default:
            return state;
    
}

}