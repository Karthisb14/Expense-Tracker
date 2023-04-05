import '../Expenses/Expense.css';
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expense(props) {

  const [FilteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  }

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={FilteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpenseList item = {filteredExpenses}/>
      </Card>
    </div>

  );
}

export default Expense;