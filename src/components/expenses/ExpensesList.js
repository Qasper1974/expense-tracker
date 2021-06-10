import React, { useState } from "react";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesContent from "./ExpensesContent";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.uitgaven.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesContent items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpensesList;
