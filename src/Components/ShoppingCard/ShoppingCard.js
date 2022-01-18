import { useNavigate } from 'react-router-dom';
import './ShoppingCard.css';

const ShoppingCard = ({ name,imageUrl,price,count }) => {
    const navigate = useNavigate();

    const redirect = () => { 
        navigate('shop/shoping-cards');
    }
    return (
        <div className='shopping-cards' onClick={redirect}>
            <div
                className='card-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
            </div>
            <div className='card-details'>
                <h5>{ name }</h5>
                <span>{count} x { price } $</span>
            </div>
        </div>
    );
}

export default ShoppingCard;