import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const changeTitleHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setInputAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSubmitExpenseData(newExpenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");

    setFormShow(false);
  };

  const [formShow, setFormShow] = useState(false);

  const formShowHandler = (e) => {
    e.preventDefault();
    setFormShow(true);
  };

  if (!formShow) {
    return (
      <div className="new-expense__addExpenseButton">
        <button type="submit" onClick={formShowHandler}>
          Add Expense
        </button>
      </div>
    );
  }

  if (formShow) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={inputTitle}
              onChange={changeTitleHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={inputAmount}
              onChange={changeAmountHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={inputDate}
              onChange={changeDateHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="text">Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
