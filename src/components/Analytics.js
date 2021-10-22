import React, { useContext } from 'react';
import List from './main/list/List';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, Container } from '@material-ui/core';

import {Pie, Bar } from 'react-chartjs-2';
import CardSm from './CardSm';

import { ExpenseTrackerContext } from '../Context/context';

import useTransactions from '../useTransactions';
import AnalyticData from './AnalyticData';

const Analytics = ({title}) => {
    
    const { balance } = useContext(ExpenseTrackerContext);
    

    return (
        
        <div className="analytics">
            <div className="analytics-container">
                <Grid container spacing={2} style={{marginBottom: "30px"}}>
                  <Grid item sm={4}>
                      <Card>
                          <CardHeader title="Balance"/>
                          <CardContent>
                              <Typography variant="h4">${balance}</Typography>
                          </CardContent>
                      </Card>
                      </Grid>
                      <Grid item sm={4}>
                      <CardSm title="Income"/>
                      </Grid>
                      <Grid item sm={4}>
                      <CardSm title="Expense"/>
                      </Grid>
                </Grid>
                <Divider />
               
               <Container style={{ marginTop: "20px"}}>
                 <Grid container spacing={2} style={{ width: "100%", }}>
           <Grid item xs={12} sm={6}>
               <AnalyticData title="Income"/>
           </Grid>
          
           <Grid item xs={12} sm={6}>
               <AnalyticData title="Expense"/>
           </Grid>
        </Grid>
               </Container>

            </div>
        
        </div>
    )
}

export default Analytics
