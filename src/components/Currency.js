import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary' style={{ marginRight: '2rem' }}>
            <label htmlFor='currency'>Currency </label>
            <select name="currency" id="currency" onChange={handleCurrencyChange}>  
                <option value="€">€ Euro</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
}
export default Currency;