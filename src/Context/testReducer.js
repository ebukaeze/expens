const transactions = {
    id: 1,
}

const testReducer = (state, action) => {



    switch (action.type) {
        case "DELETE_TRANSACTION":
            const transactions = state.filter((t) => t.id !== action.payload)
            break;

            case "ADD_TRANSACTION" :

            const transactions = [action.payload, ...state ]
                return transactions;
    
        default:
            break;
    }
}