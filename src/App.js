import './App.css';
import { Typography, styled, Box } from '@mui/material'
import Balance from './components/Balance';
import Expense from './components/Expense';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)
`
  margin: 15px, 0;
  font-size:40px;
  color:blue;
  text-transform: uppercase;
`
const Component = styled(Box)
`
  display:flex;
  background:#fff;
  width:800px;
  padding:10px;
  border-radius:20px;
  margin:auto;
  & > div{
    height:70vh;
     width:50%;
     padding:10px;
  }
`

function App() {

    const [transactions, setTransactions] = useState([
        { id: 1, text: 'Petrol', amount: -30 },
        { id: 2, text: 'Salary', amount: 100 },
        { id: 3, text: 'Pen', amount: 10 },
        { id: 4, text: 'Bonus', amount: 40 }

    ])

    return ( <
        Box className = "App" >
        <
        Header > Expense Tracker < /Header> <
        Component >
        <
        Box >
        <
        Balance transactions = { transactions }
        /> <
        Expense / >
        <
        NewTransactions / >
        <
        /Box> <
        Box >
        <
        Transactions transactions = { transactions }
        /> <
        /Box> <
        /Component>

        <
        /Box>
    );
}

export default App;