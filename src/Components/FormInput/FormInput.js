import './FormInput.css';
import { useState } from 'react';

const FormInput = ({ type, label, placeholder }) => {
    const [ value, setValue ] = useState('');

    const inputValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className='input'>
            <input className='input-type' type={type} placeholder={placeholder} value={value} onChange={inputValue} formNoValidate/>
            <label className='input-label'>{label}</label>
        </div>
    );
}

export default FormInput;