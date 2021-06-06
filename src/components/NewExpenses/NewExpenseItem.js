import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenseItem.css";

const NewExpenseItem = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpenseItem;
