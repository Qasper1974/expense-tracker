import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function ExpensesList(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.uitgaven[0].date}
        title={props.uitgaven[0].title}
        amount={props.uitgaven[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.uitgaven[1].date}
        title={props.uitgaven[1].title}
        amount={props.uitgaven[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.uitgaven[2].date}
        title={props.uitgaven[2].title}
        amount={props.uitgaven[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.uitgaven[3].date}
        title={props.uitgaven[3].title}
        amount={props.uitgaven[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default ExpensesList;
