import './Button.css';


const Button = ({children}) => {
    return (
        <button className='Button'>{children}</button>
    );
}

export default Button;