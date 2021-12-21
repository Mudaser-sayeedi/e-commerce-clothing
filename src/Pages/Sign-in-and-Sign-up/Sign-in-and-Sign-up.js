import './Sign-in-and-Sign-up.css';
import FormInput from '../../Components/FormInput/FormInput';
import Button from '../../Components/Button/Button';
import { Component } from 'react';

class SignInAndSignUp extends Component {
    constructor() { 
        super();
        this.state = {

        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log('email: '+e.target[0].value)
        console.log('password: '+e.target[1].value)
    }

    render() {
        return (
            <div className='input-container'>
                <div className='input-title'>
                    <h4>I already have an account</h4>
                    <p>Sign in with your email and password</p>
                </div>
                <form onSubmit={this.formSubmit}>
                    <FormInput type='text' label='Enter your email' placeholder='example@gmail.com'></FormInput>
                    <FormInput type='password' label='Enter your password' placeholder='Example@1234'></FormInput>
                    <div className='buttons-contianer'>
                        <Button>Sign in</Button>
                        <Button>Sign in with google!</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInAndSignUp;
