import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseFilterList from "./ExpensesFilterList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("selected year");
    setSelectedYear(selectedYear);
  };
  const filteredItemsByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        select={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
   <ExpenseChart expenses={filteredItemsByYear}/>
    <ExpenseFilterList items= {filteredItemsByYear}/>
    </Card>
  );
}
export default Expenses;
