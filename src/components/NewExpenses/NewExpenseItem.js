import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenseItem.css";

const NewExpenseItem = (props) => {
  const submitExpenseDataHandler = (data) => {
    const expanseData = { ...data, id: 10 };
    console.log("Hier is de data van NewExpenseItem:");
    console.log(expanseData);
    props.onAddExpense(expanseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpenseItem;
