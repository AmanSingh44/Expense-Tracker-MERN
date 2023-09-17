import React from 'react'
import { Box, Button, TextField, Typography,styled } from '@mui/material'

const Container=styled(Box)`
    display: flex;
    flex-direction:column;
    & > h5, & > div, & > Button{
        margin-top:30px;
    }
`
const NewTransactions = () => {
  return (
    <Container>
        <Typography variant='h5'>New Transaction</Typography>
        <TextField label="Enter expense"/>
        <TextField label="Enter amount"/>
        <Button variant='contained'>Add Transaction</Button>
    </Container>
  )
}

export default NewTransactions