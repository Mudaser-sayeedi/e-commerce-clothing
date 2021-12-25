import './Sign-in-and-Sign-up.css';
import FormInput from '../../Components/FormInput/FormInput';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';


const  SignInAndSignUp = ({ googleSignIn, signUp , signIn }) => {
    const navigate = useNavigate();

    const formSignInSubmit = async(e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        if (email.length && password.length) {
            try {
                await signIn(email, password);
                navigate('/');
            } catch (error) {
                console.log(error.message);
                alert(error.message);
            }
        }
        else {
            if (!email.length) {
                console.log('email is empty');
                alert('email is empty');
            } else if (!password.length) {
                console.log('password is empty');
                alert('password is empty');
            }
        }

    }
    const withGoogle= async () => {
        try {
            await googleSignIn();
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    const formSignUpSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const confirmPassword = e.target[2].value;
        if (email.length && password.length && confirmPassword.length) {
            if (password === confirmPassword) {
                try {
                    await signUp(email, password);
                    navigate('/');
                } catch (error) {
                    console.log(error.message);
                    alert(error.message);
                }
            }
            else {
                console.log('password and confirm password not match');
                alert('password and confirm password not match');
            }
        }
        else {
            if (!email.length) {
                console.log('email is empty');
                alert('email is empty');
            } else if (!password.length) {
                console.log('password is empty');
                alert('password is empty');
            } else if (!confirmPassword.length) {
                console.log('confirm password is empty');
                alert('confirm password is empty');
            }
        }
    }

    return (            
            <div className='form-container'>
                <form className='signIn' onSubmit={formSignInSubmit}>
                    <div className='input-title'>
                        <h4>I already have an account !</h4>
                        <p>Sign-In with your email and password or Google account.</p>
                    </div>
                    <FormInput type='text' label='Enter your email' placeholder='example@gmail.com'></FormInput>
                    <FormInput type='password' label='Enter your password' placeholder='Example@1234'></FormInput>
                    <div className='buttons-contianer'>
                        <Button>Sign In</Button>
                        <Button type='button' onClick={withGoogle}>
                            Sign in with google!
                        </Button>
                    </div>
                </form>
                <form className='signup' onSubmit={formSignUpSubmit}>
                    <div className='input-title'>
                        <h4>I do not have an account !</h4>
                        <p>Sign-Up with your email and password.</p>
                    </div>
                    <FormInput type='text' label='Enter your email' placeholder='example@gmail.com'></FormInput>
                    <FormInput type='password' label='Enter Your password' placeholder='example@1234'></FormInput>
                    <FormInput type='password' label='Re-Enter your password' placeholder='example@123'></FormInput>
                    <Button>Sign Up</Button>
                </form>
            </div>
    );
}

export default SignInAndSignUp;
