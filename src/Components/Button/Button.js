import './Button.css';


const Button = ({children, ...otherProps}) => {
    return (
        <button {...otherProps} className='Button'>{children}</button>
    );
}

export default Button;