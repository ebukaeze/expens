
const transactions = [
    {
        id: 1,
       

    },
    {
        id: 2,
       
    }
]

const contextReducer = (state, action) => {
   switch (action.type) {
       case "DELETE_TRANSACTION":
            transactions = state.filter((t) => t.id !== action.payload);
            break;

           case "ADD_TRANSACTION":
               transactions = [action.payload, ...state];
               
               return transactions;
   
       default:
           return state;
   }
}

export default contextReducer;