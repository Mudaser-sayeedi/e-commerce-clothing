import { useState , useEffect} from 'react';
import './NavBar.css';
import logo from '../../assests/crown.svg';
import ShoppingBag from '../../assests/shoppingBag.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import ShoppingCard from '../ShoppingCard/ShoppingCard';

const NavBar = ({ login, signOutUser, items, itemsCount }) => {
    const navigate = useNavigate();
    const shoppingBag = document.querySelector('.shoppingBag-dropDown');
    
    const signOut = async () => { 
        try {
            await signOutUser();
            navigate('/signIn-or-signUp');
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    // mouse and button events of dropDown
    const toggleDropDown = () => { 
        shoppingBag.classList.toggle('show');
    }
    const mouseLeave = () => { 
        shoppingBag.classList.remove('show');
    }
    const mouseEnter = () => {
        shoppingBag.classList.add('show');
    }

    console.log(items)
    return (
        <>
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
                        {login ? (
                            <Link to={''} onClick={signOut}title='sign-out'>Sign Out</Link>
                        ) : (
                            <Link to={'signIn-or-signUp'} title='sign-in'>Sign In</Link>
                        )}
                    </div>
                    <div  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='shoppingBag-container'>
                        <div onClick={toggleDropDown} className='shoppingBag-icon'>
                            <img src={ShoppingBag} alt="Shopping Bag" className='shopping-bag' title='your shop stack' />
                            <span className='shopping-counter'>{itemsCount}</span>
                        </div>
                        <div className='shoppingBag-dropDown'>
                            <div className='shoppingItems-menu'>
                                <div className='shopping-items'>
                                    {
                                        items.length ? (
                                            items.map((item) => {
                                                return (
                                                    <ShoppingCard key={item.id} {...item}></ShoppingCard>
                                                )
                                            })
                                        ) : (
                                                <div style={{height: 345, display:'flex',justifyContent:'center',alignItems:'center'}}>
                                                    <h1>Nothing in your card</h1>
                                                </div>
                                        )
                                    }
                                </div>
                                <Button>GO TO CHECKOUT</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default NavBar;