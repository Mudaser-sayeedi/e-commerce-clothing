import './CollectionItem.css'
import Button from '../Button/Button';

const CollectionItem = ({ title, items, addToCard }) => {
    return (
        <div className='item-container'>
            <h1 className='collection-title'>{title.toUpperCase()}</h1>
            <div className='items'>
                {
                    items.filter(
                        (fourItem,index) => {
                            if (index < 4) {
                                return fourItem;
                            } 
                        }
                    ).map(
                        (item) => {
                            return (
                                <div key={item.id} className='item'>
                                    <div
                                        className='item-image'
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`
                                        }}></div>
                                    <div className='item-footer'>
                                        <p className='item-name'>{item.name}</p>
                                        <span className='item-price'>{item.price}$</span>
                                    </div>
                                    <div className='item-addCard'>
                                        <Button className='addCardButton' style={{
                                            backgroundColor: 'whitesmoke',
                                            color: 'black',
                                            borderColor: 'black',
                                        }} onClick={()=>addToCard(item)}>Add To Card</Button>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}

export default CollectionItem;