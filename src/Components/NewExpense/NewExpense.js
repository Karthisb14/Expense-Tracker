import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const[isEditing, SetIsEditing] = useState(false);
    const SaveExpenseDataHandler = (enteredexpensedata) => {

        const ExpenseData = {
            ...enteredexpensedata,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
        SetIsEditing(false)
    }

    const StartEditingHandle = () => {
        SetIsEditing(true);
    }

    const StopEditingHandler = () => {
        SetIsEditing(false)
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={StartEditingHandle}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData= {SaveExpenseDataHandler} onChange= {StopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;