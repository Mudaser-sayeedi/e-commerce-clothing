import React from 'react';
import './CardShop.css';


const CardShop = ({ items, addToCard, decrease }) => { 
    console.log(items);
    return (
        <div className='cardShop-container'>
            <div className='lable-container'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <hr/>
            {
                items.map((item) => { 
                    return (
                        <React.Fragment key={item.id}>
                            <div className='cardShop'>
                                <img src={`${item.imageUrl}`} alt="Product Picture" />
                                <div className='shopDetails'>
                                    <h2>{item.name}</h2>
                                    <div className='quantity'>
                                        <span className='decrease' onClick={() => decrease(item)}><i className="fa-solid fa-angle-left"></i></span>
                                        <p>{item.count}</p>
                                        <span className='increase' onClick={() => addToCard(item)}><i className="fa-solid fa-angle-right"></i></span>
                                    </div>
                                    <p className='price'>{item.price} $</p>
                                    <span className='remove'>&times;</span>
                                </div>
                            </div>
                            <hr />
                        </React.Fragment>
                    );
                })
            }
            <div className='total'>
                <h1>TOTAL: 50 $</h1>
            </div>
        </div>
    );
}


export default CardShop;