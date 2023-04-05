import '../Expenses/ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

function ExpenseItem(props) {

    // const [title, SetTitle] = useState(props.title);

    // const clickhandler = () => {
    //     SetTitle('Updated!');
    //     console.log(title);
    // }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>

    )
}

export default ExpenseItem;