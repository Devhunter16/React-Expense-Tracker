import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    // If items has a length of 0, then return the <h2> jsx
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    
    // Otherwise, return this
    return <ul className="expenses-list">
    {props.items.map((expense) => (
            <ExpenseItem 
            // We need the id so that react knows that each of these items is unique and so
            // it can add items efficiently to the top of the list rather than randomly
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>
      ))}
    </ul>
}

export default ExpensesList;