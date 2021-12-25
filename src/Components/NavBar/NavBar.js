import './NavBar.css'
import logo from '../../assests/crown.svg'
import { Link ,useNavigate} from 'react-router-dom'

const NavBar = ({ login, signOutUser }) => {
    const navigate = useNavigate();
    
    const signOut = async () => { 
        try {
            await signOutUser();
            navigate('/signIn-or-signUp');
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    return (
        <nav className='navBar'>
            <div className='navBar-logo-container'>
                <Link to={'/'} title='Brand Logo'>
                    <img src={logo} alt="brand logo" className='navBar-logo' />
                </Link>
            </div>
            <div className='navBar-links'>
                <Link to={'shop'} title='Shop Now'>shop</Link>
                <Link to={'shop'} title='Contact-us'>contact</Link>
                <div className='signInandOut'>
                    { login ? (
                        <Link to={''} onClick={signOut}>Sign Out</Link>
                    ) : (
                        <Link to={'signIn-or-signUp'} >Sign In</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;