import React from 'react';
import { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff} from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../Context/context';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);


   

   
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions && transactions.map((transaction) =>{
                return(
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
                         <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                             <Delete />
                         </IconButton>
                     </ListItemSecondaryAction>
                 </ListItem>
              </Slide>
                )
            })}
        </MUIList>
    )
}

export default List
