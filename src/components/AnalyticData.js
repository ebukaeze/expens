import React from 'react';
import {Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

import useStyles from './styles'; 

import useTransactions from '../useTransactions';

function AnalyticData({title}) {
    const classes = useStyles();

    const { total, chartData } = useTransactions(title);

    return (
        <Card  className={title === "Income" ? classes.income : classes.expense}>
           <CardHeader  title={title}/>
           <CardContent>
               <Typography variant="h5">${total}</Typography>
                 <Bar data={chartData}/>
               </CardContent> 
        </Card>
    )
}

export default AnalyticData
