import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.uitgaven.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  let expensesContent = <p>No expenses available for this year!</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpensesList;
