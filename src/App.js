import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import './App.css'
const Dummy_expenses = [
  {
    id: "e1",
    title: "car service",
    amount: 194.12,
    date: new Date(2020, 3, 14),
  },
  {
    id: "e1",
    title: "car tire change",
    amount: 94.12,
    date: new Date(2020, 5, 14),
  },
  {
    id: "e1",
    title: "macbook",
    amount: 1904.12,
    date: new Date(2020, 8, 14),
  },
  {
    id: "e1",
    title: "bike repair",
    amount: 940.12,
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
  const [expenses,setExpenses]=useState(Dummy_expenses);
  const addExpenseHandler = expense => {
 
 setExpenses(prevExpenses=> {
   return [expense,  ...prevExpenses]
 });
  };


  return (
    <div className="wrapper">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
