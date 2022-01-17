import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toileer Paper',
      amount: 99.25,
      date: new Date(2021,10,12),
    },
    {
      id: 'e2',
      title: 'New Tv',
      amount: 79.65,
      date: new Date(2021,9,21),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 780.0,
      date: new Date(2021,2,12),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 99.25,
      date: new Date(2021,6,27),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expenses);
  }

  return (
   
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expe={expenses}/>
      {/* <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </div>
   
  );
}

export default App;
