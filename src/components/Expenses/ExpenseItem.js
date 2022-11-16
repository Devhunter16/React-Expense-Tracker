import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

/* The parameter "props" just accepts all of the properties we passed into ExpenseItem 
in our App.js file */
function ExpenseItem(props) {

  return (
    <li>
    <Card className="expense-item" >
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;