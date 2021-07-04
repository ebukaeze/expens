import React from 'react';
import { Grid, Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './form/Form';
import List from './list/List';


const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5" style={{fontWeight: "bold", lineHeight: "1.5em", marginTop: "-8px"}}>Total Balance $1000 </Typography>
                <Typography variant="subtitle1" style={{lineHeight: "1.5em", marginTop: "12px", fontWeight: "500"}}>
                     {/* InfoCard*/}
                   Try saying: Add Income for $1000 in Category Salary for Monday ...
                </Typography>
                 <Divider />
                <Form />
                  
            </CardContent>
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                       <List /> 
                  </Grid>
              </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
