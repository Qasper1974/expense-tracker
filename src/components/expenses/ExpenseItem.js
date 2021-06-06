import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [titel, setTitel] = useState(props.title);

  function clickHandler() {
    setTitel("updated");
  }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate datum={props.date}></ExpenseDate>
      </div>

      <div className="expense-item__description">
        <h2>{titel}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
