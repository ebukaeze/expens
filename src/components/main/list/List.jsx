import React from 'react';
import { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff} from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../Context/context';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const globalState = useContext(ExpenseTrackerContext);


   

    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: "50", date: "30 Jun 2021"},
        { id: 2, type: "Expense", category: "Rent", amount: "200", date: "30 Jun 2021"},
        { id: 3, type: "Income", category: "Salary", amount: "50", date: "30 Jun 2021"},
        { id: 4, type: "Expense", category: "Rent", amount: "200", date: "30 Jun 2021"},
        { id: 5, type: "Income", category: "Salary", amount: "50", date: "30 Jun 2021"}


    ];
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) =>(
              <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                 <ListItem>
                     <ListItemAvatar>
                         <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense} >
                           <MoneyOff />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}>

                     </ListItemText>
                     <ListItemSecondaryAction>
                         <IconButton edge="end" aria-label="delete" onClick="">
                             <Delete />
                         </IconButton>
                     </ListItemSecondaryAction>
                 </ListItem>
              </Slide>
            ))}
        </MUIList>
    )
}

export default List
