import './App.css';
import { Typography, styled, Box } from '@mui/material'
import Balance from './components/Balance';

const Header = styled(Typography)
`
  margin: 15px, 0;
  font-size:40px;
  color:blue;
  text-transform: uppercase;
`

function App() {
    return ( <
        Box className = "App" >
        <
        Header > Expense Tracker < /Header> <
        Box >
        <
        Balance / >
        <
        /Box> <
        Box > < /Box>

        <
        /Box>
    );
}

export default App;