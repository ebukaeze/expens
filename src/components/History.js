import React, { useContext } from 'react';
import { styled } from '@material-ui/core/styles';


import { List as MUIList, Box, Grid, Typography, ListItem, ListItemIcon, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';

import { Delete, MoneyOff} from '@material-ui/icons';

import useStyles from './styles';

import { ExpenseTrackerContext } from '../Context/context';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const History = () => {
    const classes = useStyles();
  const {deleteTransaction, transactions } = useContext(ExpenseTrackerContext)
    
    return (
        <div  className="history" style={{ maxWidth: "1040px", width: "80%", margin: "0 auto", }}>
            <Box sx={{ flexGrow: 1, maxWidth: 852, width: 600 }} >
                <Grid container spacing={2}>
                   <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" style={{textAlign: "center"}}>
            Transactions History
          </Typography>
          <Demo>
            <MUIList dense={true}>
              {transactions && transactions.map((transaction) => {
                  return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                      <MoneyOff/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={ `You added ${transaction.type} for ${transaction.category}`} secondary={`$${transaction.amount} - ${transaction.date}`}
                  />

                  <ListItemSecondaryAction>
                         <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                             <Delete />
                         </IconButton>
                     </ListItemSecondaryAction>
                </ListItem>
              
              )
              })}
            </MUIList>
          </Demo>
        </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default History
