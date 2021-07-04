import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './Details';
import Main from './main/Main';

import useStyles from '../styles';

function Expense() {
    const classes = useStyles();
    
    return (
        
        <section className="expense container"> 
        <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh', width: '95%'}}>
           <Grid item xs={12} sm={3}>
               <Details title="Income"/>
           </Grid>
           <Grid item xs={12} sm={4}>
               <Main />
           </Grid>
           <Grid item xs={12} sm={3}>
               <Details title="Expenses"/>
           </Grid>
        </Grid>
        </div>
        </section> 
       
    )
}

export default Expense
