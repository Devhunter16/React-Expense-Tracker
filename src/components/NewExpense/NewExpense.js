import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const onFormSubmitHandler = (enteredFormData) => {
        const formData = {
            // Here we are pulling all the key - value pairs out of whatever is passed
            // to our function
            ...enteredFormData,
            // Creating a unique ID for our form data
            id: Math.random().toString()
        }
        props.onAddExpense(formData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onFormSubmit={onFormSubmitHandler} />
        </div>
    )
};

export default NewExpense;