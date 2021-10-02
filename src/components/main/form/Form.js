import React, { useState, useContext} from 'react';
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { v4 as uuidv4 } from "uuid";
import { ExpenseTrackerContext } from '../../../Context/context';

import formatDate from '../../../utils/formatDate';

import useStyles from './styles';

import { incomeCategories, expenseCategories } from '../../../constants/categories';

const initialState = {
        amount: "",
        category: "",
        type: "Income",
        date: formatDate(new Date())
    }

const Form = () => {
const [formData, setFormData] = useState(initialState);

const { addTransaction } = useContext(ExpenseTrackerContext);

const createTransaction = () => {

    const transaction = {...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction);

    setFormData(initialState);

};

const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

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
                    <Select value={setFormData.type || formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>

                    </Select>
                    
                </FormControl>


            </Grid>
            <Grid item xs={6}>
                <FormControl className={classes.form} fullwidth="true" >
                    <InputLabel >Category  </InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}

                    </Select>
                   
                </FormControl>
                
            </Grid>
            <Grid item xs={6} className={classes.form} fullwidth="true">
                <TextField type="number" label="Amount" className={classes.amount} value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}/>
            </Grid>
            <Grid item xs={6} className={classes.form} fullwidth="true">
                <TextField type="date" label="Date" className={classes.date} value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
