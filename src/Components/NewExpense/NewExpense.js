import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{

    const [isEditing, setisEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.addExpense(expenseData);
    }
    const isEditingHandler = () =>{
        setisEditing(true);
    }
    const stopEditingHandler = ()=>{
        setisEditing(false);
    }
    let visibleContent = <button onClick={isEditingHandler}>Add New Expense</button>
    if(isEditing){
        visibleContent = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>
    }
    return(
        <div className='new-expense' >
            {visibleContent}
        </div>
    )
}

export default NewExpense;