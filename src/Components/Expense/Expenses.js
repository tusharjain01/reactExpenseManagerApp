import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangehandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpense = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p style={{color : "white"}}>No Expenses Found.</p>
  if(filteredExpense.length > 0){
    expenseContent = filteredExpense.map((expense) =>(
      <ExpenseItem
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
      />
    ))
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={filterChangehandler}
        ></ExpensesFilter>
        <ExpensesChart expense = {filteredExpense}></ExpensesChart>
        {/* //? Iterating over all the filtered year */}

        {expenseContent}

      </Card>
    </div>
  );
}

export default Expenses;
