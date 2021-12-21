import './NavBar.css'
import logo from '../../assests/crown.svg'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className='navBar'>
            <div className='navBar-logo-container'>
                <Link to={''} title='Brand Logo'>
                    <img src={logo} alt="brand logo" className='navBar-logo'/>
                </Link>
            </div>
            <div className='navBar-links'>
                <Link to={'shop'} title='Shop Now'>shop</Link>
                <Link to={'shop'} title='Contact-us'>contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;