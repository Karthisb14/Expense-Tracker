import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[enteredTitle, SetEnteredTitle] = useState('');
    const[enteredDate, SetEnteredDate] = useState('');
    const[enteredAmount, SetEnteredAmount] = useState('');

    // const [userInput, SetUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate:'',
    //     enteredAmount: '',
    // })

    let titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
        // SetUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // SetUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     } 
        // })
    }

    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);

        // SetUserInput({
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        SetEnteredDate(event.target.value);

        // SetUserInput({
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expensedata = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expensedata);

        // console.log(expensedata);
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onChange}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;