import './FormInput.css';

const FormInput = ({type,label,placeholder}) => {
    return (
        <div className='input'>
            <input className='input-type' type={type} placeholder={placeholder} formNoValidate/>
            <label className='input-label'>{label}</label>
        </div>
    );
}

export default FormInput;