import React from "react";
import "./ExpensesFilterList.css";
import ExpenseItem from "./ExpenseItem";
 const ExpenseFilterList = (props) => {
     return(
     <div>
         {props.items.length === 0 && <h2 className="expenses-list__fallback">No Expense found</h2>}
<ul className="expenses-list">
{props.items.length > 0 &&
props.items.map((expense) => (
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))
}
</ul>
     </div>
     )};
 export default ExpenseFilterList;