import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  
  const [isEditing, setEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };
  //click button then list occur
  const clickedByButton = () => {
    setEditing(true);
  };
   
  ///cancel button
  const clickedByCancel = () => {
      setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={clickedByButton}>
          Add new expense
        </button>
      )}
      {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} oCancel={clickedByCancel}/>}
    </div>
  );
};
export default NewExpense;
