import { Box, Card, CardContent, Typography,styled } from '@mui/material'
import React from 'react'

const Container=styled(Box)`
    display: flex;
    & > div{
        flex:1;
        padding:10px;
    }
`

const Expense = ({transactions}) => {
     
  return (
    <Container>
        <Card>
            <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color:'green'}}>50</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography>Expense</Typography>
                <Typography style={{color:'red'}}>25</Typography>
            </CardContent>
        </Card>
    </Container>
  )
}

export default Expense