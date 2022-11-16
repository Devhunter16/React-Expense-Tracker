import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // useState('') has an empty string as the argument because initially the forms are
  // empty
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormVisible, setFormVisibility] = useState(false);

  // Here we are passing event (the event where the user enters something in the field)
  // ,the target of the event (the field a user is entering text into), and the value
  // (whatever text a user enters in that field) into setEnteredTitle. That value then
  // is stored in the enteredTitle variable
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // This function toggles the visibility of the "new expense" form
  const formChanger = () => {
    if (isFormVisible === false) {
      setFormVisibility(true);
    } else if (isFormVisible === true) {
      setFormVisibility(false);
    }
  };

  const submitHandler = (event) => {
    // Here we are using the built-in JS method preventDefault() because upon clicking
    // a submit button inside of a form to submit the form what usually happens is that
    // the entire page reloads and we do not want that
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // Using the function we created in NewExpense.js
    props.onFormSubmit(expenseData);
    // Setting all fields back to empty after form submission
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  if (isFormVisible === false) {
    return (
      <form onClick={formChanger}>
        <div className="add-new-expense__wrapper">
          <button type="submit">Add New Expense</button>
        </div>
      </form>
    );
  } else if (isFormVisible === true) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={formChanger}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
