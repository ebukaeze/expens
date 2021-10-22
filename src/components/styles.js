import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
     expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    },
    appheader: {
        zIndex: "2",
        backgroundColor: "green",
        colorPrimary: "hsl(247, 69%, 61%)",
    },
   avatarIncome: {
    backgroundColor: "green",
},

avatarExpense: {
    backgroundColor: "red",
},

    
}));