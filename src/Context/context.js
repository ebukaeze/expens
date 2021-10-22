import React, {useReducer, createContext } from 'react';
import contextReducer  from './contextReducer';


const initialState = JSON.parse(localStorage.getItem('transactions')) || [{
    "amount": 2000,
    "category": "Salary",
    "type": "Income",
    "date": "2021-10-07",
    "id": "f986210a-67aa-4097-844c-245894c636ae"
}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //add action creators
    const deleteTransaction = (id) => dispatch({type: "DELETE_TRANSACTION", payload: id});

    const addTransaction = (transaction) => dispatch({ type: "ADD_TRANSACTION", payload: transaction });

    const balance = transactions.reduce((acc, currVal) => currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount, 0);
    
    return (
     <ExpenseTrackerContext.Provider value={{
         deleteTransaction, 
         addTransaction,
         transactions,
         balance
     }}>
      {children}
     </ExpenseTrackerContext.Provider>
    )
}

