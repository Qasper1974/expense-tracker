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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {props.uitgaven.map((item) => (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default ExpensesList;
