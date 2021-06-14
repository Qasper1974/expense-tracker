import React, { useState } from "react";
import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesContent from "./ExpensesContent";

import ExpensesChart from "./ExpensesChart";

function ExpensesList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.uitgaven.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesContent items={filteredExpenses} />
    </Card>
  );
}

export default ExpensesList;
