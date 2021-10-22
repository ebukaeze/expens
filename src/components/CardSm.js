import React from 'react';
import {Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import useTransactions from '../useTransactions';

const CardSm = ({title}) => {
    const { total } = useTransactions(title);
    return (
        <div>
            <Card>
             <CardHeader title={title}/>
                <CardContent>
                   <Typography variant="h4">${total}</Typography>
              </CardContent>
              </Card>
        </div>
    )
}

export default CardSm
