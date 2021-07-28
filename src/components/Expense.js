import React, {useState} from 'react';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Details from './Details';
import Main from './main/Main';

import useStyles from '../styles';

function Expense() {
     const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const openContainer = () => setClick(false);
    const classes = useStyles();
    
    return (
        <>
     
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
        </>
       
    )
}

export default Expense
