import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const setBudget = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }

    const handleBudgetChange = (event) => {
        let budgetValue = event.target.value

        setNewBudget(budgetValue);
        setBudget(budgetValue);

        if (budgetValue < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }
    }
    return (
<div className='alert alert-secondary'>
    Budget:{currency}
    <input type="number" id="budget" step="10" style={{ size: 5}} value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;