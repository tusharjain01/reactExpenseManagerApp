import React,{useState} from "react";
import Expense from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [Expenses, setexpense] = useState(DUMMY_Expenses)
  const addExpenseHandler = (expense)=>{
    // console.log(expense);
    setexpense((prevExpense)=>{
      return [expense,...prevExpense];
    });
  }
  return (
    <div>
      <NewExpense addExpense = {addExpenseHandler}/>
      <Expense item = {Expenses}></Expense>
    </div>
  );
}

export default App;
