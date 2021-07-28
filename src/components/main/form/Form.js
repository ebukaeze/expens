import React, { useState, useContext} from 'react';
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { v4 as uuidv4 } from "uuid";

import { ExpenseTrackerContext } from '../../../Context/context';

import useStyles from './styles';

const initialState = {
        amount: "",
        category: "",
        type: "Income",
        date: new Date()
    }

const Form = () => {
const [formData, setFormData] = useState(initialState);

const { addTransaction } = useContext(ExpenseTrackerContext);

const createTransaction = () => {

    const transaction = {...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction);

    setFormData(initialState);

}

console.log(createTransaction);
    
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography align="center"  variant="subtitle2" gutterBottom>
                ...
            </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl className={classes.form} fullwidth="true" >
                    <InputLabel > Type </InputLabel>
                    <Select value={setFormData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>

                    </Select>
                    
                </FormControl>


            </Grid>
            <Grid item xs={6}>
                <FormControl className={classes.form} fullwidth="true" >
                    <InputLabel >Category  </InputLabel>
                    <Select value={setFormData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>

                    </Select>
                   
                </FormControl>
                
            </Grid>
            <Grid item xs={12} className={classes.form} fullwidth="true">
                <TextField type="number" label="Amount" value={setFormData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}/>
                <TextField type="date" label="Date" className={classes.date} value={setFormData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
