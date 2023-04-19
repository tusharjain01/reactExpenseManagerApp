import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //* What is purpose to store the event value
  //? To store the value so let when the form is submitted
  //? we can use the value Because ofcourse we what to gather all values
  //? and convert them into objects when the overall form is submitted.

  // Here we are using useState not to update the component though the component will update
  // but here we are using it to storing the values , which are kind of detached from the lifecycle
  // of this component function so that no matter how often this component function is updated or rerendered
  // this state is stored and survives.

  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateChangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(EnteredAmount > 0 && EnteredDate > 0 && EnteredTitle > 0){const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");}
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangehandler}
            value={EnteredTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="100"
            step="1"
            onChange={AmountChangehandler}
            value={EnteredAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={DateChangehandler}
            value={EnteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
