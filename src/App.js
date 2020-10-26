import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobalState';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';

function App() {
  return (
   <div className='container'>
      <Header/>
      <GlobalProvider>
        <Balance/>
        <Transaction/>
        <div className='transactions-list'>
        <ExpenseList/>
        <IncomeList/>
        </div>
        
      </GlobalProvider>
      
   </div>
  );
}

export default App;
